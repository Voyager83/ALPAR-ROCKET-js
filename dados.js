let pontos = 100 
let rodada = 1 


while (rodada <= 20) {
    
    let resultadoDado = Math.floor(Math.random() * 6) + 1
    console.log(`Rodada ${rodada}: Dado rolado: ${resultadoDado}`)

    
    if (resultadoDado % 2 !== 0) {
        pontos += 10 
        console.log(' ganhou +10 pontos por ter rolado um número ímpar')
    } else {
        pontos -= 5 
        console.log(' perdeu +5 pontos por ter rolado um número par')
    }

    if (rodada % 3 === 0) {
        pontos += 15 
        console.log(' ganhou -15 pontos, essa rodada é múltipla de 3')
    }

    if (rodada % 4 === 0) {
        pontos -= 20 
        console.log(' perdeu -20 pontos, essa rodada é múltipla de 4')
    }

    
    if (pontos < 0) {
        pontos *= 2 
        console.log('Sua pontuação ficou negativa!  agora perdeu o dobro dos pontos')
    }

    console.log(`Pontuação após a rodada ${rodada}: ${pontos} pontos\n`)

    rodada++ 
}


if (pontos >= 50) {
    console.log(`parabénss, voce venceu! Pontuação final: ${pontos} pontos`)
} else {
    console.log(`Que pena, voce perdeu :(  Pontuação final: ${pontos} pontos`)
}
