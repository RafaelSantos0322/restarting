// tagged Template => processa o template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
let aluno = "Rafael"
let situacao = "Aprovado"
console.log(tag `${aluno} está ${situacao}`)