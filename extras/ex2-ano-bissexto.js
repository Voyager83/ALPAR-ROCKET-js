// Faça um programa em C para solicitar que o usuário digite dois anos, a1 e a2 (com 
// a2 > a1; por exemplo, 1970 e 2010). Mostre quais são os anos bissextos existentes 
// nesse intervalo, considerando a1 e a2.

const prompt = require('prompt-sync')()

let a1 = parseInt(prompt('Informe o ano 1: '))
let a2 = parseInt(prompt('Informe o ano 2: '))
let bi = 0


while(a2 < a1){
    
    console.log('Dentro do intervalo de anos, Ano 2 precisa ser maior que ano 1')
    let a2 = parseInt(prompt('Informe o ano 2: '))

}

for (let i = a1; i < a2; i++){

    if(i % 4 == 0){
        bi++

        console.log(`anos bi: ${i}`)
    }
}

console.log(`Quantidade de anos bissexto entre ${a1} e ${a2}: ${bi}`)
