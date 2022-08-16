import { CFunction, CCallback, readUintptr, readUintptrArray } from '../../vendor/quickjs/quickjs-ffi/quickjs-ffi.js'
import { malloc, realloc, free, sizeof_int, sizeof_uintptr_t, NULL, newstring, strlen, tocstring, freecstring } from '../../vendor/quickjs/quickjs-ffi/quickjs-ffi.so'

const LIBZMQ_SO = '/usr/lib/x86_64-linux-gnu/libzmq.so';
// const SQLITE_OK = 0;
// const SQLITE_ROW = 100;
const zmq_version = new CFunction(LIBZMQ_SO, 'zmq_version', null, 'void', 'pointer', 'pointer', 'pointer').invoke;
// const sqlite3_errmsg = new CFunction(LIBSQLITE_SO, 'sqlite3_errmsg', null, 'string', 'pointer').invoke;
// const sqlite3_close = new CFunction(LIBSQLITE_SO, 'sqlite3_close', null, 'int', 'pointer').invoke;
// const sqlite3_exec = new CFunction(LIBSQLITE_SO, 'sqlite3_exec', null, 'int', 'pointer', 'string', 'pointer', 'pointer', 'pointer').invoke;
// const sqlite3_free = new CFunction(LIBSQLITE_SO, 'sqlite3_free', null, 'void', 'pointer').invoke;
// const sqlite3_prepare_v2 = new CFunction(LIBSQLITE_SO, 'sqlite3_prepare_v2', null, 'int', 'pointer', 'pointer', 'int', 'pointer', 'pointer').invoke;
// const sqlite3_step = new CFunction(LIBSQLITE_SO, 'sqlite3_step', null, 'int', 'pointer').invoke;
// const sqlite3_finalize = new CFunction(LIBSQLITE_SO, 'sqlite3_finalize', null, 'int', 'pointer').invoke;
// const sqlite3_column_count = new CFunction(LIBSQLITE_SO, 'sqlite3_column_count', null, 'int', 'pointer').invoke;
// const sqlite3_data_count = new CFunction(LIBSQLITE_SO, 'sqlite3_data_count', null, 'int', 'pointer').invoke;
// const sqlite3_column_name = new CFunction(LIBSQLITE_SO, 'sqlite3_column_name', null, 'string', 'pointer', 'int').invoke;
// const sqlite3_column_text = new CFunction(LIBSQLITE_SO, 'sqlite3_column_text', null, 'string', 'pointer', 'int').invoke;


export class Zmq {
    static version () {
        let major = malloc(sizeof_uintptr_t);
        // realloc(major, sizeof_uintptr_t);
        // console.log(major)
        let minor = malloc(sizeof_uintptr_t);
        // realloc(minor, sizeof_uintptr_t);
        // console.log(minor);
        let patch = malloc(sizeof_uintptr_t);
        console.log(patch);
        
        zmq_version(major, minor, patch);
        let mmajor = readUintptr(major);
        console.log(mmajor);
        // console.log(major);
        let mminor = readUintptr(minor);
        console.log(mminor);
        let ppatch = readUintptr(patch);
        console.log(ppatch);
        let returnValue = {
            major: mmajor,
            minor: mminor,
            patch: ppatch
        }
        free(major);
        free(minor);
        free(patch);
        return returnValue;
    }
    
}
// export class Database {
//     pdb;
//     constructor(filename) {
//         this.query = this.query.bind(this);
//         let ppdb = malloc(sizeof_uintptr_t);
//         let rc = sqlite3_open(filename, ppdb);
//         this.pdb = readUintptr(ppdb);
//         free(ppdb);
//         if (rc != SQLITE_OK) {
//             let err = sqlite3_errmsg(pdb);
//             sqlite3_close(this.pdb);
//             throw new Error(err);
//         }
//     }
//     close = () => {
//         sqlite3_close(this.pdb);
//     }
//     update = (sql) => {
//         // let result = [];
//         // let cb = new CCallback(function (pArg, nCol, azVals, azCols) {
//         //     let row = {};
//         //     for (let i = 0; i < nCol; i++) {
//         //         row[newstring(readUintptrArray(azCols, i))] = newstring(readUintptrArray(azVals, i));
//         //     }
//         //     result.push(row);
//         //     return 0;
//         // }, null, 'int', 'pointer', 'int', 'pointer', 'pointer');
//         let pperrmsg = malloc(sizeof_uintptr_t);
//         // sqlite3_exec(this.pdb, sql, cb.cfuncptr, NULL, pperrmsg);
//         sqlite3_exec(this.pdb, sql, NULL, NULL, pperrmsg);
//         let perrmsg = readUintptr(pperrmsg);
//         free(pperrmsg);
//         // cb.free();
//         if (perrmsg != NULL) {
//             let err = newstring(perrmsg);
//             sqlite3_free(perrmsg);
//             throw new Error(err);
//         }
//         // return result;
//     }
//     query = function* (sql) {
//         let zSql = tocstring(sql);
//         let nByte = strlen(zSql);
//         let ppStmt = malloc(sizeof_uintptr_t);
//         let rc = sqlite3_prepare_v2(this.pdb, zSql, nByte, ppStmt, NULL);
//         let pStmt = readUintptr(ppStmt);
//         free(ppStmt);
//         freecstring(zSql);
//         if (rc != SQLITE_OK) {
//             let err = sqlite3_errmsg(pdb);
//             throw new Error(err);
//         }
//         try {
//             let colCount = sqlite3_column_count(pStmt);
//             while (sqlite3_step(pStmt) == SQLITE_ROW) {
//                 let row = {}
//                 for (let i = 0; i < colCount; i++) {
//                     row[sqlite3_column_name(pStmt, i)] = sqlite3_column_text(pStmt, i);
//                 }
//                 yield row;
//             }
//         } catch (e) {
//             throw e;
//         } finally {
//             sqlite3_finalize(pStmt);
//         }
//     }
// }
