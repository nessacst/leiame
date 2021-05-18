const { conn } = require("../db");

async function up() {
  const db = await conn();

await db.run(sql = `
  CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    autor TEXT,
    edicao TEXT,
    editora TEXT
  )
`);


await db.run(sql = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
 
  )
`);
}


async function down() {

  const db = await conn();
  await db.run('DROP TABLE livros');
  await db.run('DROP TABLE users');

}

module.exports = { up, down };
