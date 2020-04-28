import {
  LOAD_ALL_MOVIES,
  LOAD_MOVIE,
  ADD_TO_WATCHLIST,
  DELETE_FROM_WATCHLIST,
  GET_FAVORITES_MOVIES,
  LOAD_MORE,
  CHANGE_LOAD_MORE_COUNT,
  CHANGE_SEARCH_TITLE,
  SUCCESS
} from "../constants"


export const getFilms = (data) => {
  return {
    type: LOAD_ALL_MOVIES + SUCCESS,
    payload: data
  };
};

export const getFilm = (film) => {
  return {
    type: LOAD_MOVIE + SUCCESS,
    payload: film
  };
};

export const addToWatchlist = (id) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: { id },
  };
};

export const deleteFromWatchlist = (id) => {
  return {
    type: DELETE_FROM_WATCHLIST,
    payload: { id },
  };
};

export const getFavoritesMovies = (favoritesArr) => {
  return {
    type: GET_FAVORITES_MOVIES,
    payload: { favorites: favoritesArr },
  };
};

export const loadMoreMovies = (moreMovies) => {
  return {
    type: LOAD_MORE,
    payload: { moreMovies }
  }
}

export const changeLoadMoreCount = (loadMoreCount) => {
  return {
    type: CHANGE_LOAD_MORE_COUNT,
    payload: { loadMoreCount }
  }
}

export const changeSearchTitle = (searchTitle) => {
  return {
    type: CHANGE_SEARCH_TITLE,
    payload: { searchTitle }
  }
}

