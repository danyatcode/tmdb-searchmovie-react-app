import React from 'react';
import { MoviesState } from '../context/Context'


export default function MakeItemList(props) {

    const { tvMovies, movies, query, queryListLength, setQueryListLength } = MoviesState();

    const allMovies = [...tvMovies.list];
    allMovies.splice(tvMovies.list.length - 1 , 0, ...movies.list);
    const allGenres = {...tvMovies.genres, ...movies.genres};

    const showedList = query.input.length < 3 ? allMovies : query.results?.results;

    const filteredList = showedList.filter( movie => movie.media_type === "person"? false : true);
    
    let list;

    if(query.input.length >= 3) { 
        list = showedList === query.results.results && filteredList.map(movie => {
            
            const movieRelease = movie.first_air_date? movie.first_air_date + '' : movie.release_date + '';
            const movieYear = movieRelease.split('-');

            function filterGenres(){

                const movieGenres = movie && movie.genre_ids && movie.genre_ids.length > 0 ? 
                movie.genre_ids.map(id => {
                    const keys = Object.keys(allGenres).length;
                    let filtered = []
                    for(let i = 0; i < keys - 1; i++){
                        if(allGenres[i].id === id){
                            filtered.push(allGenres[i].name)
                        }
                    }
                    return filtered
                })
                :
                [];

                 
                let filtered = [];
                for( let i = 0; i < Object.keys(movieGenres).length; i++){
                    if(movieGenres[i].length > 0){
                        filtered.push(movieGenres[i])
                    }
                }
                return filtered[0]
            }
            
                return (
                    <a key={movie.id} className='movie-section-item' href='/'>
                        <div className='movie-item-image-div'>
                            { <span className='movie-media-type'>{movie.media_type ? movie.media_type: movie.first_air_date? 'TV' : '//NO API'}</span>}
                            {/*Media type in API of TV series isn't exist*/}
                            <img className='movie-item-image' src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} alt={movie.name || movie.title} />
                        </div>
                        <div className='movie-item-description'>
                            <div className='movie-item-title'>
                                {movie.name ? movie.name : movie.title}
                            </div>
                            <div className='movie-item-info'>
                                { movieYear && movieYear[0]? <span className='movie-item-year'>{movieYear[0]} року</span> : <span></span>}
                                <span className='movie-item-genre'>{ filterGenres() }</span>
                            </div>
                        </div>
                    </a>
                );
    });
    }
    else{
        list = filteredList.map(movie => {
            
            const movieRelease = movie.first_air_date? movie.first_air_date + '' : movie.release_date + '';
            const movieYear = movieRelease.split('-');

            
            function filterGenres(){

                const movieGenres = movie && movie.genre_ids && movie.genre_ids.length > 0 ? 
                movie.genre_ids.map(id => {
                    const keys = Object.keys(allGenres).length;
                    let filtered = []
                    for(let i = 0; i < keys - 1; i++){
                        if(allGenres[i].id === id){
                            filtered.push(allGenres[i].name)
                        }
                    }
                    return filtered
                })
                :
                [];

                 
                let filtered = [];
                for( let i = 0; i < Object.keys(movieGenres).length; i++){
                    if(movieGenres[i].length > 0){
                        filtered.push(movieGenres[i])
                    }
                }
                return filtered[0]
            }
                return (
                    <a key={movie.id} className='movie-section-item' href='/'>
                        <div className='movie-item-image-div'>
                            { <span className='movie-media-type'>{movie.media_type? movie.media_type: movie.first_air_date? 'TV' : '//NO API'}</span>}
                            {/*Media type in API of TV series isn't exist*/}
                            <img className='movie-item-image' src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} alt={movie.name || movie.title} />
                        </div>
                        <div className='movie-item-description'>
                            <div className='movie-item-title'>
                                {movie.name ? movie.name : movie.title}
                            </div>
                            <div className='movie-item-info'>
                                { movieYear && movieYear.length > 1 ? <span className='movie-item-year'>{movieYear[0]} року</span> : <span></span>}
                                <span className='movie-item-genre'>{ filterGenres()? filterGenres()[0]: '//API NO GENRE'}</span>
                            </div>
                        </div>
                    </a>
                );       
        })
    };
    React.useEffect( () => {
        function setListLength(){ 
            setQueryListLength(list.length)
        }
        setListLength()
    }
    , [list, queryListLength, setQueryListLength]);

    return list;
}