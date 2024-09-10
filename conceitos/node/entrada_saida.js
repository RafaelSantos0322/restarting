const dados = process.argv.indexOf('-a') != -1

if(dados){
    // na saida padrão escreva
    process.stdout.write('Funcionou')
    process.exit()

}else{
    process.stdout.write('Digite seu nome \n')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Olá ${nome}\n`)
        process.exit()
    })

}