import React, {FC} from 'react'
import s from './style.module.scss'

interface Props{
    type : string 
}

const PokeTypesItem : FC<Props>= ({type}) => {
    function ShowType(){
        switch (type) {
            case 'grass':
                return <p className={s.grass}>{type}</p>
            case 'fire':
                return <p className={s.fire}>{type}</p>
            case 'poison':
                return <p className={s.poison}>{type}</p>
            case 'water':
                return <p className={s.water}>{type}</p>
            case 'shadow':
                return <p className={s.shadow}>{type}</p>
            case 'normal':
                return <p className={s.normal}>{type}</p>
            case 'fighting':
                return <p className={s.fighting}>{type}</p>
            case 'flying':
                return <p className={s.flying}>{type}</p>
            case 'ground':
                return <p className={s.ground}>{type}</p>
            case 'rock':
                return <p className={s.rock}>{type}</p>
            case 'bug':
                return <p className={s.bug}>{type}</p>
            case 'ghost':
                return <p className={s.ghost}>{type}</p>
            case 'steel':
                return <p className={s.steel}>{type}</p>
            case 'electric':
                return <p className={s.electric}>{type}</p>
            case 'psychic':
                return <p className={s.psychic}>{type}</p>
            case 'ice':
                return <p className={s.ice}>{type}</p>
            case 'dragon':
                return <p className={s.dragon}>{type}</p>
            case 'dark':
                return <p className={s.dark}>{type}</p>
            case 'fairy':
                return <p className={s.fairy}>{type}</p>
            case 'unknown':
                return <p className={s.unknown}>{type}</p>
        }
    }
    return <strong>{ShowType()}</strong>
}

export default PokeTypesItem