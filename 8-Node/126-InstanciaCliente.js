const contA = require('./126-InstanciaUnica')
const contB = require('./126-InstanciaUnica')

const contC = require('./126-InstanciaNova')()
const contD = require('./126-InstanciaNova')()

contA.inc()
contA.inc()
console.log(contB.valor)

contC.inc()
contC.inc()
console.log(contD.valor)
