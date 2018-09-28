const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    filtra(funcionarios)
})

function filtra(array = []){
    let mulheres_chinesas = array.filter(e => e.genero == 'F' && e.pais == 'China' )
    console.log(mulheres_chinesas)
}