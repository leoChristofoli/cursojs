import React from 'react'
import { ChildrenWithProps } from '../utils/children'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                ChildrenWithProps(props)
            }
        </ul>
    </div>
