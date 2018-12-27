import React, { Fragment } from 'react'

export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Obrigado!</h2>
    </Fragment> // Aqui React.Fragments são abrigatórias


// export default props => 
//     <Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Obrigado!</h2>
//     </Fragment> // Aqui React.Fragments são abrigatórias