// Com promisse
const { rejects } = require('assert');
const http = require('http');
const { get } = require('https');

const getTurma = letraTurma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`
    return new Promise((resolve, rejects) => {
        
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }
                catch(e){
                    rejects(e)
                }
            })
        })
        
    })
}


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))