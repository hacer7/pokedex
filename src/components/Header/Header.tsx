import React, { ReactNode, FC } from "react"
import s from './style.module.scss'

interface Props{
    children? : ReactNode
}

const Header : FC<Props> = ({children}) => {
    return <div className={s.container}><h1>Pokedex</h1>{children}</div>;
};

export default Header;
