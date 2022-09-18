import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import axios from 'axios'
import { IPokemon } from '../model'
import PokeTypes from '../PokeTypes'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd'
import Modal from '../Modal'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function PokemonItem({pokemon} : any){
    const[pok, setPok] = useState<IPokemon>()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    async function fetchPokemon() {
        setLoading(true)
        axios.get(pokemon.url)
            .then((res) => (
                setPok(res.data)
        ))
        setLoading(false)
    }

    useEffect(() => {
        fetchPokemon()
    },[pokemon])
    
    return (
        <>
            <div className={s.container} onClick = {() => setModal(true)}>
                <p>{pok?.id}</p>
                {loading ? <div><Spin indicator={antIcon}/></div> : 
                <div><img src={pok?.sprites.front_default} alt="" /></div>}
                <h4>{pok?.name}</h4>
                <PokeTypes types = {pok?.types}/>
            </div>
            {modal && <>
                <div className={s.bg} onClick={() => setModal(false)} /> 
                <Modal pokemon = {pok}/>
            </>}
        </>
    )
}

export default PokemonItem