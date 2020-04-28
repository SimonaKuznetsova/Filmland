import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import './Search.css'
import { getFilmsThunk } from '../../redux/thunk'
import {changeSearchTitle} from '../../redux/AC'
import SearchIcon from '../../icons/Search'

class Search extends Component {
    state = {
        title: ''
    }

    onValueChange = (ev) => {
        this.setState({
            title: ev.currentTarget.value
        })
    }

    onSearchFilmsClick = () => {
        return (this.props.getFilmsThunk(this.state.title),
        this.props.changeSearchTitle(this.state.title))
    }
    
    render() {
        return (
            <div className='main-search'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={this.onValueChange} />

                <NavLink to='/movies'><button onClick={this.onSearchFilmsClick}><SearchIcon/></button></NavLink>
            </div>
        )
    }
}

export default connect(null, {
    getFilmsThunk,
    changeSearchTitle
})(Search)

