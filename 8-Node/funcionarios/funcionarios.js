const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero === 'F'
const chineses = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);
    
    console.log(func)
})



// Minha primeira tentativa. Funcionou, porém merece ser reescrita
// function filtra(array = []){
//     let mulheres_chinesas = array.filter(e => e.genero == 'F' && e.pais == 'China' )
//     console.log(mulheres_chinesas)
// }