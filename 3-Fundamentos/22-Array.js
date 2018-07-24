const valores = []

console.log(valores.length)
valores.push(1, 2, 3)
console.log(valores)
let last = valores.pop()
console.log(valores)
console.log(last)
delete valores[0]
console.log(valores[valores.length - 1])
console.log(valores.slice(0, 1))

