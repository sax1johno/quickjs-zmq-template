import { Database } from "./sqlite.mjs";

var myDb = new Database("./test.db");

const createQuery = `CREATE TABLE IF NOT EXISTS contacts (
    contact_id INTEGER,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL
)`

myDb.update(createQuery);

const insertQuery = `
INSERT INTO contacts values(0, "John", "OConnor", "sax1johno@gmail.com", "760.220.6906")
`;

myDb.update(insertQuery);

const selectQuery = `
select * from contacts;
`;

var rows = myDb.query(selectQuery);
for (const row of rows) {
    console.log("===");
    for (const key of Object.keys(row)) {
        console.log(`${key} => ${row[key]}`);
    }
}
