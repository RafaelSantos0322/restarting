let altura = 0
let largura = 0
let escolhido
let vidas = 1
let pontos = 0
let contador = 10
var tempoAparecimento = 1500

nivel = window.location.search
nivel = nivel.replace('?', '').trim()
console.log(nivel)
if(nivel.trim() === 'normal'){
    tempoAparecimento = 1500
} else if(nivel.trim() === 'dificil'){
    tempoAparecimento = 1000
} else if(nivel.trim() === 'chuck_norris'){
    tempoAparecimento = 750
}
function recuperarTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth    
}
recuperarTamanhoTela()

function posicaoImagemRandomica(){
    // Verifica se há outro mosquito renderizado  e o apaga.
    if(document.getElementById('mosquito') ){
        let consumirVidas = 0
        document.getElementById('mosquito').remove()
        if(vidas > 3 ){
            window.location.href = 'game_over.html'
        } else {
            document.getElementById(`v${vidas}`).src='img/coracao_vazio.png'
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    // controle para caso seja menor que 0
    posicaoX = posicaoX < 0  ? 0 : posicaoX
    posicaoY = posicaoY < 0  ? 0 : posicaoY
    console.log(posicaoX, posicaoY)
    
    // Criando HTML através da DOM
    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mudarTamanhoAleatoriamente()
    mosquito.className = escolhido + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = removerMosquito

    document.body.appendChild(mosquito)
}

function mudarTamanhoAleatoriamente(){
    let classe = Math.floor(Math.random() * 3) 
    // É importante dar o espaço após a classe pois se não vai dar erro
    let classes = Array('mosquito1 ', 'mosquito2 ', 'mosquito3 ')
    escolhido = classes[classe]
    console.log(escolhido)
}
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    // Não precisa de break pois assim que o javascript ler o return ele sairá da função.
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
function removerMosquito(){
    document.getElementById('mosquito').remove()
    pontos += 10
}