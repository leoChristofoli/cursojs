import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro' // Todos os componentes devem iniciar com letra maiúscula
// Primeiro é um alias

import Welcome from './components/Welcome'

ReactDOM.render(<Welcome nome="Leonardo" />, document.getElementById('root'))
