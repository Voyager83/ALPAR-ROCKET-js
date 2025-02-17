const prompt = require('prompt-sync')()

const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let acertou = false

console.log("Bem-vindo ao Jogo de Adivinhação!")
console.log("Tente adivinhar o número secreto entre 1 e 100.")

while (!acertou) {
   
    let palpite = parseInt(prompt("Digite seu palpite: "))
    tentativas++
    
  
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.")
        continue
    }
    
  
    if (palpite < numeroSecreto) {
        console.log("O número secreto é maior!")
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é menor!")
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`)
        acertou = true
    }
}