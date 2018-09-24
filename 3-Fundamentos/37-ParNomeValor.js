const saudacao = 'Oi' // Contexto Léxico 1

function exec(){
    const saudacao = 'Olá' // Contexto Léxico 2
    return saudacao;
}

// Objs são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        rua: 'abc',
        numero: '123'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.nome)
console.log(cliente.endereco.rua)