import React from 'react'
import 'styles/components/Sign.scss'

export const SignInForm = () => {
    return (
        <section className='sign'>
            <form className='sign__form'>
                <h1 className='sign__caption'>Sign in</h1>
                <input type='text' placeholder='Email' className='sign__input sign__input_email'/>
                <input type='password' placeholder='Password' className='sign__input sign__input_pass'/>
                <button className='btn sign__submit'>
                    Sign In
                </button>
            </form>
        </section>
    )
}