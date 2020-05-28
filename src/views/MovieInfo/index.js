import React, {useEffect} from 'react'
import { getFilm } from 'ducks/movie/actions'
import { connect } from 'react-redux'
import AddFavBtn from 'views/AddFavBtn'
import DeleteFavBtn from 'views/DeleteFavBtn'
import RatingIcon from 'icons/Rating'


const MoreInfoMovie = (props) => {
    
    const filmID = props.match.params.filmID

    useEffect( () => {
        getFilm(filmID)
    }, [])

        const { Title, Year, Genre, Actors, Plot,  Poster,imdbRating } = props.movie

        const { favorites, getFilm } = props

        return <div className='movie-more'>
            <div className='movie-more__info'>
                <h1 className='movie-more__title'>
                    {Title}
                </h1>
                <p className='movie-more__actors'>{Actors}</p>
                <p>{Plot}</p>
                <span className='movie-more__genre'>{Year}, {Genre}</span>
                <div className='movie-more__details'>
                    <div className='movie-more__rating'>
                        <RatingIcon/>
                        <p>{imdbRating}</p>
                    </div>
                    <div className='movie-more__btn'>
                    {favorites.includes(filmID) ? <DeleteFavBtn id={filmID} /> : <AddFavBtn id={filmID}/> }
                    </div>
                </div>
            </div>

            <div className='movie-more__poster'>
                <img src={Poster} alt='Poster' />
            </div>
        </div>
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieModule.movie,
        favorites: state.watchlistModule.favorites
    }
}

export default connect(mapStateToProps, { getFilm })(MoreInfoMovie)