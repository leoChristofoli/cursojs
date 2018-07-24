let isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

// Falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(('' || null || 0 || 'Nome'))

let nome = ''

console.log(nome || 'Desconhecido')