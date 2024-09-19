const http = require('http');

const getTurma = (letraTurma, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados =>{
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

function imprimir(params){
    console.log(params)
}

// eu tenho que passar uma função sem invocar que vai receber o dados e fazer alguma ação com ela.
// function imprimir(){}
let nome = []
getTurma('A', alunos => {
    // Com os alunos retornados eu vou pegar a variavel nome e concatenar o valor de alunos.map pegando cada aluno.nome
    nome = nome.concat(alunos.map(aluno => aluno.nome))    
    console.log(nome)
    }
)
