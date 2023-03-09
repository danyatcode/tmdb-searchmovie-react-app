import React from 'react';
import { IoStarOutline } from "react-icons/io5";
import { MoviesState } from '../context/Context';

const MoviesSlide = (props) => {

  const {movies} = MoviesState();

  return (

    <div className='slide' key={props.key}>

    <h5>{props.item.title}</h5>

    <img className='slide-image-bg' src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`} alt={'#'} />
    <div className='slide-content-div'>

        <div className='slide-content-inner'>

            <div className='slide-overlay' />
            <img className='slide-image' src={`https://image.tmdb.org/t/p/w1280/${props.item.backdrop_path}`} alt={props.item.title} />

            <div className='movie-info'>

                <h1 className='movie-info-title'>{props.item.title} / {props.item.original_title}</h1>
                <div className='movie-info-release'><span>Дата випуску:</span> <span className='release-date'>{props.item.release_date}</span></div>
                <h3 className='movie-info-description'>Опис фільму</h3>
                <p>{props.item.overview? props.item.overview : "Опис відсутній..."}</p>

                <div className='movie-info-stats'>

                    <div className='movie-info-genres'>
                        Жанри:
                        {props.item.genre_ids.map( id => <span key={id} className='genre'> {movies.genres.map( genre => genre.id === id && genre.name)} </span>)}
                    </div>

                    <div className='movie-info-ratings'>
                        <IoStarOutline fontSize={40}/>
                        <div className='movie-rating-div'>
                        <span className='vote-average'>{props.item.vote_average} /10</span>
                        <span>{props.item.vote_count}</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </div>
  )
}

export default MoviesSlide
