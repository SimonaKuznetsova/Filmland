import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'styles/components/Home.scss'
import 'styles/components/Btn.scss'
import 'styles/base/fonts.scss'
import 'styles/components/Home.scss'
import { store } from 'redux/store'
import MovieList from 'views/MovieList'
import Watchlist from 'views/Watchlist'
import { Header } from 'views/Header'
import {SignInForm} from 'views/SignInForm'
import MovieInfo from 'views/MovieInfo'

function Home() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <section className='home'>
          <Header />
          <div className='home__container'>
            <div className='home__inner'>
              <Route exact path='/' component={MovieList} />
              <Route exact path='/watchlist' component={Watchlist} />
              <Route exact path='/movie/:filmID' component={MovieInfo}/>
              <Route exact path='/sign-in' component={SignInForm}/>
            </div>
          </div>
        </section>
      </Provider>
    </BrowserRouter>
  );
}

export default Home;