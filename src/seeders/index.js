const Livro = require("../models/Livros");
const User = require('../models/User');
const fs = require('fs');
const path = require('path');

async function up() {

  const content = fs.readFileSync(path.join(__dirname, 'dados.json'));
  const data = JSON.parse(content);

   for (const livro of data.livos) {
    Livro.cadastrar(livro);
  }

  for (const user of data.users) {
    User.criar(user);
  }

}

module.exports = { up };
