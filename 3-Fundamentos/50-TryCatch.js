function tratarErro(error){
    // throw new Error('Erro inesperado')
    // throw 1
    throw{
        msg: error.message,
        date: new Date
    }
}

function imprirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(err){
        tratarErro(err)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'João'}
imprirNome(obj)