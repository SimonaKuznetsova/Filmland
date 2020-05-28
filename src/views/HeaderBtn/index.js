import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBtn = () => {
    return (
        <Link to='/sign-in' className='header__btn btn'>
                Sign in
        </Link>
    )
}