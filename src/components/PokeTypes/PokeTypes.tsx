import React,{FC}  from 'react'
import { Type } from '../model'
import PokeTypesItem from './PokeTypesItem'

interface Props{
    types : Type[] | undefined
}

const PokeTypes : FC<Props>= ( {types} ) => {
    return (
        <div> {types?.map(type => {
            return <PokeTypesItem type = {type.type.name} key = {type.type.name}/>
        })}</div>  
    )
}

export default PokeTypes