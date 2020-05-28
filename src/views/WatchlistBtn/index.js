import React from 'react'
import { NavLink } from 'react-router-dom'

export const WatchlistBtn = (props) => {
    return (
        <NavLink to='/watchlist' className='header__link header__link-watchlist' onClick={(ev) => props.moveInd(ev.target)}>
            <span className='header__item'>Watchlist</span>
            </NavLink>
    )
}