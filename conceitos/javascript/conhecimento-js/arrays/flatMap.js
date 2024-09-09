let escola = [{
    turma: 'Turma 1',
    alunos : [
    {nome: 'Vagner', nota : 8.9},
    {nome: 'Gabriel', nota : 8.8},
    {nome: 'Herickson', nota : 8.9}
    ]    
    },
{
    turma: 'Turma 2',
    alunos : [
    {nome: 'Valter', nota : 7.8},
    {nome: 'Wilma', nota : 8.9},
    {nome: 'Paulina', nota : 9}
]
    }
]

let pegaNotas = aluno => aluno.nota
let pegaNotasTurma = turma => turma.alunos.map(pegaNotas)


//let soma = escola.flatMap(pegaNotasTurma)
// ReCriando o flatMap
Array.prototype.flatMap2 = function(callback){
    // Vai retornar apartir do  prototipo concat criando um array vazio e adicionando um map nos itens passados por parâmetro para o array vazio.
    return Array.prototype.concat.apply([], this.map(callback))
}
let soma = escola.flatMap2(pegaNotasTurma)
console.log(soma)