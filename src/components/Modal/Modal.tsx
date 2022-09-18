import { FC } from 'react'
import { IPokemon } from '../model'
import PokeStats from '../PokeStats'
import s from './style.module.scss'

interface Props{
    pokemon : IPokemon | undefined
}

const Modal : FC<Props> = ({pokemon}) => {
    return (
        <>
            <div className={s.container}>
                <div className={s.header}>
                    <h1>{pokemon?.name}</h1>
                    <h1>{pokemon?.id}</h1> 
                </div>
                <div className={s.image}><img src={pokemon?.sprites.front_default} alt="" /></div>
                <div>
                    <PokeStats fullStats={pokemon?.stats} key = {pokemon?.id} />
                </div>
            </div>
        </>
    )
}

export default Modal