for (let letra of "Jacaré, leão") {
    console.log(letra);
}
const nome = new Map([
    ['Map', { 'foiMostrado' : true}],
    ['Set', { 'foiMostrado' : true}],
    ['Promisse', { 'foiMostrado' : false}]
]);

for(let [k, v] of nome.entries()){
    console.log(k, v)
}
for(let keys of nome.keys()){
    console.log(keys)
}
for(let value of nome.values()){
    console.log(value)
}

const s = new Set([1, 2, 3]);
for (let numero of s) {
    console.log(numero);
}
