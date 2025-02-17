/*Criar uma calculadora de impostos.
 
A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor),
uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
O ICMS deverá ser calculado após o produto receber (ou não desconto).
O progama deverá retornar o valor do produto original, se ele teve desconto,
o valor do produto com desconto e o valor do produto com o imposto aplicado. 
Pra tornar as coisas mais interessantes, como o valor do imposto é variável, 
vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)

*/
const prompt = require('prompt-sync')()

let precoOriginal = parseFloat(prompt("Digite o preço do produto: R$ "))

let temDesconto = prompt("O produto tem direito a desconto de 10%? (s/n): ").toLowerCase() === 's'

let icms = Math.floor(Math.random() * (25 - 12 + 1)) + 12

let precoDesconto
if (temDesconto) {
    precoDesconto = precoOriginal * 0.9
} else {
    precoDesconto = precoOriginal
}

let precoFinal = precoDesconto * (1 + icms / 100)

console.log(`Preço original: R$ ${precoOriginal.toFixed(2)}`)
console.log(`Teve desconto? ${temDesconto ? 'Sim (10%)' : 'Não'}`)
console.log(`Preço com desconto: R$ ${precoDesconto.toFixed(2)}`)
console.log(`ICMS aplicado: ${icms}%`)
console.log(`Preço final com imposto: R$ ${precoFinal.toFixed(2)}`)