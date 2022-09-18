import { Progress } from 'antd'
import { FC } from 'react'
import { Stat } from '../model'
import s from  './style.module.scss'

interface Props{
    fullStats : Stat[] | undefined
}

const PokeStats : FC<Props>= ({fullStats}) => {
    return (
        <>
        {fullStats?.map((stat, i) => (
            <div className={s.oneStat} key = {i}>
                <p>{stat.stat.name}</p>
                <Progress percent={stat.base_stat} showInfo = {false} className = {s.prog}/>
                <p>{stat.base_stat}</p>
            </div>
        ))
        }
        </>
    )
}

export default PokeStats