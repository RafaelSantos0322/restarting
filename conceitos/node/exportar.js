this.a = true
exports.b = false
module.exports.c = true
exports.d = null
// como essa propriedade não tem um chave declarada é como se ela não apontasse para nada tendo seu valor ficado perdido
exports = null


console.log(module.exports)