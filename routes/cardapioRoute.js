const express = require('express')
const cardapioController = require('../controllers/cardapioController');

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

//Crud cardápio

//Ver
route.get('/ver', cardapioController.listarCardapio)

//Cadastro
route.get('/cadastro', cardapioController.formCadastro)

route.post('/cadastro', cardapioController.salvarCadastro)

//Delete
route.delete('/deletar/:posicao', cardapioController.deletarPizza)

module.exports = route