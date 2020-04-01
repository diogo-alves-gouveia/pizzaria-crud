const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {
            listaDePizza
        })
    },
    formCadastro: (req, res) => {

        req.body.nomePizza
        req.body.nomePizza
        res.render("cadastroCardapio")
    },
    salvarCadastro: (req, res) => {

        const {nomePizza,precoPizza} = req.body;
        Cardapio.cadastrarPizza(nomePizza, precoPizza);
        res.redirect("/cardapio/ver");
    },

    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect("/cardapio/ver");
    }
}

module.exports = cardapioController