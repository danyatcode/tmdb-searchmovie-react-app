import React from 'react'
import { MoviesState } from '../context/Context';
import MakeItemList from './itemList';


const Home = () => {
    
  const { queryListLength } = MoviesState();
  
  return (
    <div className='movie-page'>
      <div className='movies-container'>
          <div className={queryListLength === 0? 'grid-no-needed': 'movie-grid'}>
            <MakeItemList />
            { queryListLength === 0 && <p className='nothing-found'>Жодного фільму по цьому запиту не знайдено</p> }
          </div>
      </div>
    </div>
  )
}

export default Home
