/*

Closure é o escopo criado quando uma função é declarada.
Esse escopo permite a função acessar e manipular variáreis externas à função.

*/

const x = "Global"

function func(){
    const x = "Local"
    function inner(){
        return x
    }
    return inner
}

const minhaFunc = func()
console.log(minhaFunc())