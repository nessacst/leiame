const { conn: conexao } = require("../db");


//LIVROS####
//CADASTRO DE LIVROS
async function cadastrar(data) {
  const sql = `
  INSERT INTO
  livros (name, image, autor, edicao, editora)
  VALUES
    (?, ?, ?, ?, ?)
  `;

  const db = await conexao();
  const { name, image, autor, edicao, editora } = data;
  const { lastID } = await db.run(sql, [name, image, autor, edicao, editora]);
  return lastID;
}



//BUSCAR TODOS LIVROS
async function todoslivros() {
  const sql = `
  SELECT
    *
  FROM
  livros
`;
  const db = await conexao();
  const livros = await db.all(sql);
  return livros;
}




//BUSCAR POR TITULO
async function BuscaAll(param) {
 //var paran = 'poder';
  //console.log(paran);
const sql = 'SELECT * FROM livros where name LIKE ?';
const db = await conexao();
const livros = await db.all(sql, '%'+param+'%');
return livros; 
}





module.exports = { cadastrar, todoslivros,  BuscaAll };
