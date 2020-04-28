import React from 'react'
import {Link} from 'react-router-dom'
import './Watchlist.css'
import WatchlistIcon from '../../icons/Watchlist'

export const WatchlistButton = () => {
    return (
            <Link to='/watchlist' className='watchlist'>Watchlist <WatchlistIcon /></Link>
    )
}