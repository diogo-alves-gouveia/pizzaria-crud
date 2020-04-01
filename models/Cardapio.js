let cardapio = [
    {nome:"Calamussa", preco:"R$30,00", img:'pizza1.jpg'},
    {nome:"Frango com Catupiry", preco:"R$35,00",  img:'pizza2.jpg'},
    {nome:"Romanesca", preco:"R$35,00",  img:'pizza3.jpg'},
]

function listarCardapio(){
    return cardapio
}

function cadastrarPizza(nome, preco) {
    let novaPizza = {
        nome,
        preco,
        img:'pizza3.jpg',
    }

    return cardapio.push(novaPizza);
}


function deletarPizza(posicao) {

    return cardapio.splice(posicao, 1)

    // Outra forma:
    // cardapio = cardapio.filter((pizza, index) => {
    //     return pizzaindex != posicao!
    // })
}

module.exports = {listarCardapio, cadastrarPizza, deletarPizza}