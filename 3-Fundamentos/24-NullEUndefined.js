const a = {
    name: 'test'
}

console.log(a)

const b = a // Apontam para o mesmo endereço na memória, atribuição por referência

b.name = 'test2'

console.log(a)

let c = 3

let d = c

console.log(c, d)
d++
console.log(c, d)

// ----------------------------------------------------

let valor // undefined

valor = null // ausência de valor
