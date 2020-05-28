import React from 'react'
import {Navigation} from 'views/Navigation'
import {Tools} from 'views/Tools'
import 'styles/components/Header.scss'

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__inner'>
                <Navigation />
                <Tools />
            </div>
        </header>
    )
}