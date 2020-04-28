import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import Search from './components/Search/Search'
import './App.css'
import { store } from './redux/store'
import MovieList from './components/Movies/MovieList'
import MoreInfoMovie from './components/Movies/MoreInfoMovie'
import Watchlist from './components/Watchlist/Watchlist'
import { WatchlistButton } from './components/Watchlist/WatchlistButton'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='main'>

            <Route path='/' component={Search} />
            <WatchlistButton />
            <Route path='/movies' component={MovieList} exact />
            <Route path='/movies/:filmID' component={MoreInfoMovie} exact />
            <Route path='/watchlist' component={Watchlist} exact />

            {/* <Watchlist /> */}

        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
