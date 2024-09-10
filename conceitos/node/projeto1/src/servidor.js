const porta = 3003
const express = require('express');
const app = express()
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

// Responsável por fazer o parse dos dados recebidos(string/Json) para os dados que são requisitados (objeto)
app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware funcionou e vai chamar o próximo')
    next()

})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getAllProdutos())
})



// Pega os valores digitados pelos usuários e envia através do post.
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco : req.body.preco
    })
    res.send(produto)
})

// Os parâmetros na URL são indicados pelos : como podemos ver abaixo no '/produtos:id'
app.get('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco : req.body.preco, 
    })
    res.send(produto)  
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id : req.params.id,
        nome: req.body.name,
        preco : req.body.preco 
        
    })
    res.send(produto)  
})



app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deletarProduto(req.params.id)
    console.log(produto)
    return res.send(produto)
})

// Fica 'ouvindo' as alterações que acontecem na porta determinada e neste caso dá um retorno 
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})