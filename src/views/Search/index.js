import React, { useState } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {changeSearchTitle, getFilms} from 'ducks/movieList/actions'
import SearchIcon from '../../icons/Search'

const Search = (props) => {

    const [title, setTitle] = useState('')

    const onValueChange = (ev) => {
        setTitle(ev.currentTarget.value)
    }

    const onSearchFilmsClick = () => {
        props.getFilms(title)
        props.changeSearchTitle(title)
    }
    
        return (
            <div className='search__inner'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={onValueChange} 
                    className='search__input'/>

                <NavLink to='/' 
                    className='search__btn' 
                    onClick={onSearchFilmsClick}>
                        <SearchIcon/>
                </NavLink>
            </div>
        )

}

export default connect(null, {
    getFilms,
    changeSearchTitle
})(Search)