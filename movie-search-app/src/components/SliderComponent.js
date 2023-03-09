import React from 'react'
import { MoviesState, genres } from '../context/Context';
import Slider from "react-slick";
import {SampleNextArrow, SamplePrevArrow} from "./Arrows"
import MoviesSlide from './MoviesSlide';



export default function SliderComponent(){
      
      const { movies } = MoviesState();

      const settings = {
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        speed: 350,
        cssEase: "linear",
      }


      return (
        <div className='slider'>
          <Slider {...settings} 
          >
              {
                movies.list.length !== 0 ? movies.list.map(item => (
                  <MoviesSlide key={movies.list.indexOf(item)} item={item}/>
                )) 
                : 
                (
                  <p>Список фільмів порожній</p>
                )
              }  
          </Slider>
        </div>
      );
    
  }

