const escola = 'abcd'

console.log(escola.charAt(3))

console.log(escola.charAt(100)) // vazio

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('c'))

console.log(escola.substring(1))

console.log(escola.substring(0, 3))

let a = 'escola '

const final = a + escola

console.log(final)

let nomes = 'Fulano,Ciclano;João'

console.log(nomes.split(','))

console.log(nomes.split(/[,;]/)) // regex
