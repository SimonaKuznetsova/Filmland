import React from 'react'
import Search from 'views/Search'
import {HeaderBtn} from 'views/HeaderBtn'

export const Tools = () => {
    return (
        <div className='header__tools'>
            <Search />
            <HeaderBtn />
        </div>
    )
}