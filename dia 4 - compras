const prompt = require('prompt-sync')()

let listaDeCompras = []

function adicionarItem(item) {
    listaDeCompras.push(item)
    console.log(` Item '${item}' foi adicionado à  lista.`)
}


function removerItem(item) {
    const index = listaDeCompras.indexOf(item)
    if (index !== -1) {
        listaDeCompras.splice(index, 1)
        console.log(` Item '${item}' foi removido da  lista.`)
    } else {
        console.log(` O item '${item}' não foi encontrado.`)
    }
}

function visualizarLista() {
    if (listaDeCompras.length === 0) {
        console.log(" Sua lista  está vazia!")
    } else {
        console.log("lista de compras:")
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }
}

function menu() {
    console.log("1️  Adicionar item")
    console.log("2️  Remover item")
    console.log("3️  Visualizar lista")
    console.log("4️  Sair")
    
    let opcao = prompt("Escolha uma opção: ")
    
    switch (opcao) {
        case '1':
            let itemAdicionar = prompt("Digite o nome do item que deseja adicionar: ")
            adicionarItem(itemAdicionar)
            menu()
            break
        case '2':
            let itemRemover = prompt("Digite o nome do item que deseja remover: ")
            removerItem(itemRemover)
            menu()
            break
        case '3':
            visualizarLista()
            menu()
            break
        case '4':
            console.log(" Saindo... ate bbreve")
            break
        default:
            console.log("Opção inválida. Tente novamente.")
            menu()
    }
}
menu()
