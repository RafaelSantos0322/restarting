// Exemplo de leitura de um arquivo usando o Promise
const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

const caminho = path.join( __dirname + '/dados.txt')

function lerArquivo(caminho){
    return new Promise ( resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Processamento final')
    })
} 

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))