const Pessoa = {
    nome: 'Ana',
    idade: 2
}

console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa))

Object.defineProperty(Pessoa, 'data', {enumerable: true, writable: false, value: '01/01/2017'})

Pessoa.data = 2 // não será escrito
console.log(Pessoa)

const objDest = {
    a: 1
}

const obj = Object.assign(objDest, Pessoa)

console.log(obj)