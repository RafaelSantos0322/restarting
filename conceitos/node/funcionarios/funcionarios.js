const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Axios vai pegar na url de forma assincrona a resposta e vai passar para a constante funcionarios.
axios.get(url).then(response => {
    // Sem o .data ele retorna os JSON Completo cheios de dados desnecessários para a nossa aplicação, podemos acessar outras informalções por exemplo se o status da solicitação for === a 200(sinal que foi respondido com sucesso)
    const funcionarios = response.data
    // Quando eu quiser buscar por valores específicos basta eu usar o metodo .filter() caso eu queira comparar eu uso o reduce
    let pais = f => f.pais == 'Brazil'
    let sexo = f => f.genero == 'M'
    let nome = (anterior, atual) => {
        return anterior.nome.length > atual.nome.length ? anterior : atual  
    }
    let brasileiros = funcionarios.filter(pais).filter(sexo).reduce(nome)
    console.log(brasileiros)

})