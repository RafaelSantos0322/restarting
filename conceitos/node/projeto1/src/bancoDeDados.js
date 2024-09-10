const sequence = {
    _id : 1 ,
    get id() {return this._id++ }
}
const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
// Retorna o produto pelo id ou retorna um array vazio
function getProduto(id){
    return produtos[id] || {}
}

function deletarProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Retorna todos os valores da variável produtos
function getAllProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto,  getProduto, getAllProdutos, deletarProduto}
    