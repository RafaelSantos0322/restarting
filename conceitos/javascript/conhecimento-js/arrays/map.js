// let elementos = [3, 7, 2 , 5 ,8 , 9]
// let mult = elementos.map(element => element * 2).filter((elemento) => elemento >= 10 )
// console.log(mult)

// function getAprovados(notas){
//     return notas >= 7
// }
// let listaNotas = [5, 4, 8, 6, 9, 10, 8.7, 7]
// // Declarando dessa forma imperativa fica claro que ele vai chamar a função passando como parametro nota.
// console.log(listaNotas.filter(nota => getAprovados(nota)))

let produtos = [
    {preco: 2000, desconto : .4},
    {preco: 100, desconto : .3},
    {preco: 11809, desconto : .2},
    {preco: 40, desconto : .1},
    {preco: 5000, desconto : .1}
]
function calcularPrecoComDesconto(produto){
    return produto.preco * (1 - produto.desconto)
}
function altoCusto(produto){
    return produto.preco > 1000  
}
function getCusto(produtoComDesconto){
    return parseInt(produtoComDesconto * .3)
}
console.log(produtos
    .filter(altoCusto)
    .map(calcularPrecoComDesconto)
    .map(getCusto)
)