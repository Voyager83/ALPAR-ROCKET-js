const prompt = require('prompt-sync')()  

let quantidadeMembros = parseInt(prompt("Quantos membros a equipe tem (mínimo 3)? ")) 

while (quantidadeMembros < 3) {
    console.log("A equipe precisa ter pelo menos 3 membros.") 
    quantidadeMembros = parseInt(prompt("Quantos membros a equipe tem (mínimo 3)? ")) 
}

let melhoresDesempenhos = "" 
let piorDesempenho = "" 
let maiorMedia = -1 
let menorMedia = 999 

for (let i = 0;  i < quantidadeMembros;  i++) {
    console.log(`Membro ${i + 1}:`) 

    let nome = prompt("Nome do membro: ") 
    let numTarefas = parseInt(prompt("Quantas tarefas este membro completou (5 a 10)? ")) 
    
    while (numTarefas < 5 || numTarefas > 10) {
        console.log("O número de tarefas deve ser entre 5 e 10.") 
        numTarefas = parseInt(prompt("Quantas tarefas este membro completou (5 a 10)? ")) 
    }

    let soma = 0 
    let pesoTotal = 0 

    for (let j = 0;  j < numTarefas;  j++) {
        let pontos = parseInt(prompt(`Pontuação da tarefa ${j + 1} (0 a 10): `)) 
        
        while (pontos < 0 || pontos > 10) {
            console.log("A pontuação da tarefa deve ser entre 0 e 10.") 
            pontos = parseInt(prompt(`Pontuação da tarefa ${j + 1} (0 a 10): `)) 
        }

     
        let peso = (j % 2 === 0) ? 2 : 1 
        soma += pontos * peso 
        pesoTotal += peso 
    }

    let media = soma / pesoTotal 

    if (media > 8) {
        media += 2  
    }

    console.log(`Média de ${nome}: ${media.toFixed(2)}\n`) 

   
    if (media > maiorMedia) {
        maiorMedia = media 
        melhoresDesempenhos = nome 
    }

    
    if (media < menorMedia) {
        menorMedia = media 
        piorDesempenho = nome 
    }
}


console.log("Resultados finais:") 
console.log("Melhor desempenho: " + melhoresDesempenhos + " com média " + maiorMedia.toFixed(2)) 
console.log("Pior desempenho: " + piorDesempenho + " com média " + menorMedia.toFixed(2)) 
