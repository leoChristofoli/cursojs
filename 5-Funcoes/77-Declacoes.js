console.log(func(1,2))
// function declaration
function func(x, y){
    return x + y
} // Assim há hoisting. Essa função pode ser chamada antes da declaração

// function expression
const sub = function(x, y){
    return x + y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}
