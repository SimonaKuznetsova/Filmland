import {LOAD_ALL_MOVIES, START, SUCCESS, CHANGE_LOAD_MORE_COUNT, LOAD_MORE, CHANGE_SEARCH_TITLE } from '../constants'

const defaultState = {
    foundMovies: [],
    loading: false,
    loaded: false,
    totalCount: null,
    loadMoreCount: 1,
    searchTitle: ''
}  

export function searchFilms (initialState = defaultState, action) {
    const {type, payload} = action

    switch (type) {
        case LOAD_ALL_MOVIES + START:
            return {...initialState, loading: true}
        case LOAD_ALL_MOVIES + SUCCESS:
            return {...initialState, foundMovies: payload.Search, totalCount: payload.totalResults, loading: false, loaded: true}
        case CHANGE_LOAD_MORE_COUNT: 
            return {...initialState, loadMoreCount: payload.loadMoreCount}
        case LOAD_MORE:
            return {...initialState, foundMovies: initialState.foundMovies.concat(payload.moreMovies)}
        case CHANGE_SEARCH_TITLE: {
            return {...initialState, searchTitle: payload.searchTitle}
        }
    }

    return initialState
}