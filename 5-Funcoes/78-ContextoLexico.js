const valor = 'Global'

function func(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    func()
}

exec()