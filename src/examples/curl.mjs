import { CFunction, CCallback } from '../../vendor/quickjs/quickjs-ffi/quickjs-ffi.js'
import { NULL, printhex, realloc, memcpy, memset, newstring, free } from '../../vendor/quickjs/quickjs-ffi/quickjs-ffi.so'

const LIBCURL_SO = '/usr/lib/x86_64-linux-gnu/libcurl.so.4'
const CURLE_OK = 0;
const CURLOPTTYPE_LONG = 0;
const CURLOPTTYPE_OBJECTPOINT = 10000;
const CURLOPTTYPE_FUNCTIONPOINT = 20000;
const CURLOPTTYPE_OFF_T = 30000;
const CURLOPTTYPE_BLOB = 40000;
const CURLOPTTYPE_STRINGPOINT = CURLOPTTYPE_OBJECTPOINT;
const CURLOPT_URL = CURLOPTTYPE_STRINGPOINT + 2;
const CURLOPT_FOLLOWLOCATION = CURLOPTTYPE_LONG + 52;
const CURLOPT_WRITEFUNCTION = CURLOPTTYPE_FUNCTIONPOINT + 11;
const curl_easy_init = new CFunction(LIBCURL_SO, 'curl_easy_init', null, 'pointer').invoke;
const curl_easy_perform = new CFunction(LIBCURL_SO, 'curl_easy_perform', null, 'int', 'pointer').invoke;
const curl_easy_strerror = new CFunction(LIBCURL_SO, 'curl_easy_strerror', null, 'string', 'int').invoke;
const curl_easy_cleanup = new CFunction(LIBCURL_SO, 'curl_easy_cleanup', null, 'void', 'pointer').invoke;

export function get(url) {
    let curl = curl_easy_init();
    if (curl == NULL) {
        throw new Error('curl_easy_init() failed');
    }
    let response = NULL;
    let respsize = 0;
    let cb = new CCallback((data, size, nmemb, userp) => {
        let realsize = size * nmemb;
        // printhex(data, realsize);
        response = realloc(response, respsize + realsize + 1);
        if (response == NULL) {
            // console.log('Out of memory');
            return 0;
        }
        memcpy(response + respsize, data, realsize);
        respsize += realsize;
        memset(response + respsize, 0, 1);
        return realsize;
    }, null, 'size_t', 'pointer', 'size_t', 'size_t', 'pointer');
    try {
        for (let v of [
            [['int', 'string'], [CURLOPT_URL, url]],
            [['int', 'long'], [CURLOPT_FOLLOWLOCATION, 1]],
            [['int', 'pointer'], [CURLOPT_WRITEFUNCTION, cb.cfuncptr]],
        ]) {
            let curl_easy_setopt = new CFunction(LIBCURL_SO, 'curl_easy_setopt', 2, 'int', 'pointer', ...v[0]);
            let res = curl_easy_setopt.invoke(curl, ...v[1]);
            curl_easy_setopt.free();
            if (res != CURLE_OK) {
                throw new Error("curl_easy_setopt() failed: " + curl_easy_strerror(res));
            }
        }
        let res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            throw new Error("curl_easy_perform() failed: " + curl_easy_strerror(res));
        }
        return newstring(response);
    }
    catch (ex) {
        throw ex;
    } finally {
        free(response);
        cb.free();
        curl_easy_cleanup(curl);
    }
}
