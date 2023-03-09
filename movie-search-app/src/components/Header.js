import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Query from './Query'

const Header = () => {

  const location = useLocation();
  
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-ul'>
          <div className='header-lefts'>
            <li><Link to={'/tmdb-searchmovie-react-app/'}>Головна</Link></li>
            <li><Link to='/tmdb-searchmovie-react-app/reviews'>Огляди</Link></li>
          </div>
          {location.pathname === '/tmdb-searchmovie-react-app/' && <Query />}
        </ul>
      </nav>
    </header>
  )
}

export default Header
