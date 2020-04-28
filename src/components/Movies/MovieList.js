import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Movie from './Movie'
import './MovieList.css'
import {changeLoadMoreCount} from '../../redux/AC'
import {loadMoreMoviesThunk} from '../../redux/thunk'

export class MovieList extends React.Component {

    state = {
        loadMoreCount: this.props.loadMoreCount
    } 

    render() {
        const { listName = "movielist", films, loaded, loading, searchTitle, changeLoadMoreCount, loadMoreMoviesThunk } = this.props

        const onLoadMoreClick = () => {
            this.setState({
                loadMoreCount: this.state.loadMoreCount + 1
            }, () => {
                changeLoadMoreCount(this.state.loadMoreCount)
                loadMoreMoviesThunk(this.state.loadMoreCount, searchTitle)
            })
        }

        if (loading) return <h2 className='message'>Loading...</h2>

        if (!films) return <h2 className='message'>No movies found :(</h2>

        if (loaded) return (
            <div className='main-movie_list__wrapper'>
                <ul className='main-movie_list'>
                    {films.map(m => <li key={`${listName}_${m.imdbID}`}>
                        <Movie title={m.Title}
                            year={m.Year}
                            poster={m.Poster}
                            type={m.Type}
                            id={m.imdbID} />
                    </li>)}
                </ul>

                {loadMoreMoviesThunk && <button onClick={onLoadMoreClick} className='load-more'>Load more...</button>}
            </div>
        )

        return null
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films.foundMovies,
        loaded: state.films.loaded,
        loading: state.films.loading,
        loadMoreCount: state.films.loadMoreCount,
        searchTitle: state.films.searchTitle
    }
}

export default connect(mapStateToProps, {changeLoadMoreCount, loadMoreMoviesThunk})(MovieList)