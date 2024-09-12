function valorMonetário(partes, ...valores) {
    const resultado = []
    valores.forEach((valor,  indice) => {
        valor = isNaN(valor) ? valor : `R\$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29
const parcela = 16

console.log(valorMonetário `compre avista por ${preco} ou parcele de duas vezes e pague por mês: ${parcela} `)