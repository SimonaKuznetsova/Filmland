import {
    LOAD_ALL_MOVIES,
    LOAD_MOVIE,
    START
} from "../constants";
import {
    getFavoritesMovies,
    loadMoreMovies,
    getFilms,
    getFilm
} from "../AC";

import axios from "axios";

const callApi = "https://www.omdbapi.com";

export const getFavoritesMoviesThunk = (ids) => {
    return async (dispatch) => {
        const favoritesArr = [];

        for (let i = 0; i < ids.length; i++) {
            const options = {
                method: "get",
                url: callApi,
                params: {
                    apiKey: "9e432373",
                    i: ids[i],
                }
            };

            const { data } = await axios(options);

            favoritesArr.push(data);
        }

        console.log(favoritesArr);

        dispatch(getFavoritesMovies(favoritesArr));
    };
};

export const loadMoreMoviesThunk = (loadMoreCount, searchTitle) => {
    return async (dispatch) => {
        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey: "9e432373",
                s: searchTitle,
                page: loadMoreCount
            }
        }

        const { data: { Search } } = await axios(options)

        dispatch(loadMoreMovies(Search))
    }
}

export const getFilmsThunk = (title) => {
    return async (dispatch) => {

        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey: "9e432373",
                s: title,
            }
        }

        const { data } = await axios(options)

        dispatch({ type: LOAD_ALL_MOVIES + START })
        dispatch(getFilms(data))
    }
}

export const getFilmThunk = (id) => {
    return async (dispatch) => {

        const options = {
            method: "get",
            url: callApi,
            params: {
                apiKey: "9e432373",
                i: id,
            }
        }

        const { data } = await axios(options)

        dispatch({ type: LOAD_MOVIE + START })
        dispatch(getFilm(data))
    }
}