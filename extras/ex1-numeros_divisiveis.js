// Faça um programa em C para indicar quantos números divisíveis por x (digitado pelo 
//     usuário) existem entre dois limites, a e b (também digitados pelo usuário, b > a). 
//     Mostre quais são esses números. 

const prompt = require('prompt-sync')()

let a = parseInt(prompt('Informe um valor para A: '))
let b = parseInt(prompt('Informe um valor para B: '))
let contador = 0

while(a > b){
    console.log("A nao pode ser maior que B!")

    let b = parseInt(prompt('Atualize o valor de B: '))

}

let x = parseInt(prompt('Informe um numero inteiro para o divisor: '))

for (let i = a; i < b; i++){

    if (i % x == 0){

        contador++
    }

}
console.log(`O numero total de divisores é: ${contador}`)