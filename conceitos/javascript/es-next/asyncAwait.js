// Com promisse
const http = require('http');


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
// Recurso ES 8
// Simplificando promisses

let obterDados = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // Sempre retorna um objeto chamado  AsyncFunction

obterDados()
    // O resultado do método then sempre é passado para o próximo método. 
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))
    .catch(e => console.log("Houve um erro inesperado, tente novamente")) 