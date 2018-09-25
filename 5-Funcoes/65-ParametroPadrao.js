function soma(a, b){
    a = a || 1
    b = b || 1

    return a + b
}

console.log(soma())
console.log(soma(0,0))

function soma2(a, b){
    a = a !== undefined ? a : 1
    b = isNaN(b) ? 1 : b
    return a + b
}

console.log(soma2(0,0))

// es2015
function soma3(a = 1, b = 1){
    return a + b
}

console.log(soma3(0, 5))