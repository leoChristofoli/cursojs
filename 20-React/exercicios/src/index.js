import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro' // Todos os componentes devem iniciar com letra maiúscula
// Primeiro é um alias

import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" > 
            <Filho nome="João" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Pereira" />
            <Filho nome="Paulo" sobrenome="Pereira" />
        </Pai>
    </div>

, document.getElementById('root')
)
