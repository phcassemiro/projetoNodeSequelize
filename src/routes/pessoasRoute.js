const {Router} = require('express');

const pessoaController = require('../controllers/PessoaController.js');

const router = Router();router.get('/pessoas',pessoaController.pegatodas);

module.exports = router;