import React, {createContext, useContext, useEffect, useReducer} from "react";

const Data = createContext();

const moviesReducer = (state, action) => {
    switch(action.type){
        case "PROVIDE_DATA" : return {...state, list : [...action.payload]}
        case "PROVIDE_DATA_GENRES" : return {...state, genres : action.payload}
        default: return state
    }
}

const tvMoviesReducer = (state, action) => {
    switch(action.type){
        case "PROVIDE_DATA_LIST" : return {...state, list : [...action.payload]}
        case "PROVIDE_DATA_GENRES" : return {...state, genres : action.payload}
        default: return state
    }
}

const Context = ({children}) => {
    
    const [movies, dispatchMovies] = useReducer(moviesReducer, {
        list: [],
        genres: {}
    });

    const [tvMovies, dispatchTvMovies] = useReducer(tvMoviesReducer, {
        list: [],
        genres: {}
    });

    const [queryListLength, setQueryListLength] = React.useState(0);

    const [query, setQuery] = React.useState({
        input: '',
        results: []
    });

    useEffect( () => {
        
        async function getData(){
          const Movies = await fetch("https://api.themoviedb.org/3/list/7?api_key=846ee28613acee0bc3a824c4bf36274d&language=uk");
          const MoviesJson = await Movies.json();

          const TVMovies = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=846ee28613acee0bc3a824c4bf36274d&language=uk&page=2");
          const TVMoviesJson = await TVMovies.json();

          const genres = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=846ee28613acee0bc3a824c4bf36274d&language=uk");
          const genresJson = await genres.json();

          const TVGenres = await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=846ee28613acee0bc3a824c4bf36274d&language=uk");
          const TVGenresJson = await TVGenres.json();

          dispatchMovies({type : "PROVIDE_DATA", payload: MoviesJson.items})
          dispatchMovies({type : "PROVIDE_DATA_GENRES", payload: genresJson.genres});
          dispatchTvMovies({type : "PROVIDE_DATA_LIST", payload: TVMoviesJson.results});
          dispatchTvMovies({type : "PROVIDE_DATA_GENRES", payload: TVGenresJson.genres});
        }
        getData();
      }, [])
    return(
        <Data.Provider value={{movies, dispatchMovies, tvMovies, dispatchTvMovies, query, setQuery, queryListLength, setQueryListLength}}>
            {children}
        </Data.Provider>
    )
}

export default Context

export const MoviesState = () => {
  return useContext(Data)
}

