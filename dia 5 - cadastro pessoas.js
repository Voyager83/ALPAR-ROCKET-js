const prompt = require('prompt-sync')()

let cadastros = []

function adicionarUsuario() {
    let nome = prompt("Digite o nome: ")
    let idade = parseInt(prompt("Digite a idade: "))
    let email = prompt("Digite o email: ")
    
    if (cadastros.some(usuario => usuario.email === email)) {
        console.log("Esse email já está cadastrado!")
        return
    }
    
    cadastros.push({ nome, idade, email })
    console.log(`Usuário '${nome}' cadastrado com sucesso!`)
}

function removerUsuario() {
    let email = prompt("Digite o email do usuário a ser removido: ")
    let index = cadastros.findIndex(usuario => usuario.email === email)
    
    if (index !== -1) {
        let usuarioRemovido = cadastros.splice(index, 1)
        console.log(`Usuário '${usuarioRemovido[0].nome}' removido com sucesso.`)
    } else {
        console.log("Nenhum usuário encontrado com esse email.")
    }
}

function listarUsuarios() {
    if (cadastros.length === 0) {
        console.log("📭 Nenhum usuário cadastrado.")
    } else {
        console.log("📋 Lista de usuários cadastrados:")
        cadastros.forEach((usuario, index) => {
            console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`)
        })
    }
}


function menu() {

    console.log("1️ - Adicionar usuário")
    console.log("2️ - Remover usuário pelo email")
    console.log("3️ - Listar usuários")
    console.log("4️ - Sair")
    
    let opcao = prompt("Escolha uma opção: ")
    
    switch (opcao) {
        case '1':
            adicionarUsuario()
            break
        case '2':
            removerUsuario()
            break
        case '3':
            listarUsuarios()
            break
        case '4':
            console.log("saindo")
            return
        default:
            console.log("Opção invaliad.")
    }
    
    menu()
}


menu()
