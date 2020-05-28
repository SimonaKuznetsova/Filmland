import {combineReducers} from 'redux'

import movieListReducer from 'ducks/movieList/reducer'
import {moduleName as movieListModule} from 'ducks/movieList/const'

import movieReducer from 'ducks/movie/reducer'
import watchlistReducer from 'ducks/watchlist/reducer'

export const reducer = combineReducers({
    [movieListModule]: movieListReducer,
    movieModule: movieReducer,
    watchlistModule: watchlistReducer
})