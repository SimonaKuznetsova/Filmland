import React, {useState} from 'react'
import {HomeBtn} from 'views/HomeBtn'
import {WatchlistBtn} from 'views/WatchlistBtn'

export const Navigation = () => {

    const [state, setState] = useState({
        indWidth: '0px',
        indLeft: '0px'
    })

    const moveInd = (el) => {
        setState({
            indWidth: el.offsetWidth,
            indLeft: el.offsetLeft
        })
    }

    return (
        <nav className='header__nav'>
            <>
                <HomeBtn moveInd={moveInd} />
                <WatchlistBtn moveInd={moveInd} />
            </>
            <div className='header__indicator' style={{ width: state.indWidth, left: state.indLeft }}></div>
        </nav>
    )
}