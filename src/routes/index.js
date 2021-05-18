const express = require('express');
const router = express.Router();
const BibliotecaController = require('../controllers/BibliotecaController');
const usersController = require("../controllers/usersController");

const authController = require("../controllers/authController");
const Auth = require("../middleware/auth");
const multer = require('multer');


const parser = multer( { 
  storage: multer.diskStorage( {
    destination: 'public/imgs',
    filename(req, file, callback) {
      callback(null, file.originalname);
    }
  }) 
})
//HOME
router.get('/', (req, res) => res.redirect('/index'));
//INDEX
router.get('/index', Auth.isAuthenticated, BibliotecaController.index);
//LIVROS
router.get('/cadastrar', Auth.isAuthenticated, BibliotecaController.cadastrar);
router.post('/cadastrar/action',  parser.single("image"), BibliotecaController.cadastrarLivros);

//LISTA USUARIOS
router.get('/listadeusuarios',  usersController.listus);
router.post('/listadeusuarios', usersController.save);

//USUARIOS
router.get('/signup',  usersController.index);
router.post('/signup', usersController.save);

//BUSCAR
router.get('/buscar', Auth.isAuthenticated, BibliotecaController.buscar);

// LOGIN E SAIR
router.get("/signin", authController.create);
router.post("/signin", authController.signin);

router.get("/logout", Auth.isAuthenticated, authController.signout);


module.exports = router;
