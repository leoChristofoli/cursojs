// introduzido no ES2015

const Pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco: {
        numero: 405,
        rua: 'abc'
    }
}

const { nome, idade } = Pessoa
const {nome: n, peso: p = null} = Pessoa

console.log(nome, idade, n, p)

const { endereco: { numero, rua } } = Pessoa

console.log(numero, rua)