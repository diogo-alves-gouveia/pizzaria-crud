const express = require('express')
const methodOverride = require('method-override')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')
let rotasIndex = require('./routes/indexRoute')

let app = express()

//configurando o express para aceitar ejs
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

// colocar o extended:true para configurar uma biblioteca nativa do node
//http:localhost:3000/rota?nomePizza=mussarela (Forma URL encoded, por padrão o node não consegue converter isso sozinho, por isso configuramos aqui)

app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);
app.use(rotasIndex);

app.listen(3000, ()=>console.log("Servidor rodando perfeitamente"))