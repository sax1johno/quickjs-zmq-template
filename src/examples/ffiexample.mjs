import { CFunction, freeCif } from '../../vendor/quickjs/quickjs-ffi/quickjs-ffi.js';
import { LIBM_SO, LIBC_SO } from '../vendor/quickjs/quickjs-ffi/quickjs-ffi.so';

let printf = new CFunction(LIBC_SO, 'printf', 1, 'int', 'string', 'double', 'double', 'int');
console.log(LIBC_SO);
printf.invoke('%g %g %d\n', 3.141592654, 2.718281829, 299792458);
freeCif(printf.cifcacheindex);
printf.free();
printf = new CFunction(LIBC_SO, 'printf', 1, 'int', 'string', 'string', 'string');
printf.invoke('%s %s\n', 'hello', 'world');
freeCif(printf.cifcacheindex);
printf.free();

let ceil = new CFunction(LIBM_SO, "ceil", 1, 'double', 'double');
console.log(ceil.invoke(4.3));
freeCif(ceil.cifcacheindex);