// Spread No objeto
let funcionário = {
    nome: "Adailton",
    idade: 22,
    funcao : 'Marceneiro'
}
let empregados = {ehAtivo : true, ...funcionário }
console.log(empregados)

// Spread no Array
let nome =  ['João', 'Felipe', 'Miguel']
let pessoas = ['Rafael', ...nome, 'Hélio']
console.log(pessoas)

// Rest na função
function dizerOla(...nomes){
    nomes.map(nome => {
        console.log(` olá ${nome} `)
    })
}
dizerOla('João', 'Felipe', 'Miguel')