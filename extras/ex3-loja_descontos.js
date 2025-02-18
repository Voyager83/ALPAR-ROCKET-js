// Faça um programa em C para resolver o seguinte problema: uma loja fará a venda 
// de 100 produtos. Solicite a entrada do preço desses 100 produtos. Aplique um 
// desconto de 5% para os produtos com preço maior que 150 reais. Ao final, mostre a 
// média dos preços, considerando os eventuais descontos existentes. 

const prompt = require('prompt-sync')()
let soma = 0.0

for (let i = 1; i <= 3; i++){

    let valor = parseFloat(prompt('valor do produto: '))

    if (valor > 150){

        valor = valor * 0.95
    }
    
    soma += valor
}

let media = soma/3

console.log(`valor da soma: ${soma}`)
console.log(`Valor da média com os descontos aplicados: ${media.toFixed(2)}`)