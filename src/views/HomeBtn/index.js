import React from 'react'
import { Link } from 'react-router-dom'

export const HomeBtn = (props) => {
    return (
        <Link to='/' className='header__link header__link-home' onClick={ (ev) => props.moveInd(ev.target)}>
            <span className='header__item'>Home</span>
        </Link>
    )
}
