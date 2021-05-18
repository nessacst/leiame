const Livro = require("../models/Livros");

//INDEX
const index = async (req, res) => {
  const livros = await Livro.todoslivros();
  res.render("livros/index.njk", { livros });
};


//TELA CADASTAR
const cadastrar = async (req, res) => {
  res.render("livros/cadastro.njk");

};

//CADASTRAR LIVROS
const cadastrarLivros = async (req, res) => {
  const image = `/imgs/${req.file.originalname}`;
  const { name, autor, edicao, editora } = req.body;
  const id = await Livro.cadastrar({
    name,
    image,
    autor,
    edicao,
    editora,
  });
  //console.log(name, image );

  res.redirect("/index");
};


//TELA BUSCAR
const buscar = async (req, res) => {
  var paramdeBuscar = req.query.query;
  const resultado = await Livro.BuscaAll(paramdeBuscar);
  res.render("livros/buscar.njk", { resultado, paramdeBuscar});
};



module.exports = { index, cadastrar, cadastrarLivros,  buscar };
