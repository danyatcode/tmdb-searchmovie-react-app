import React from 'react'
import { MoviesState } from '../context/Context'

const Query = () => {

    const {query, setQuery} = MoviesState();

    React.useEffect( () => {
        async function getSearched(){
            const SearchQuery = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=846ee28613acee0bc3a824c4bf36274d&query=${ query.input.length >= 3? query.input: '' }`)
            const SearchQueryJson = await SearchQuery.json();
  
            setQuery(prevState => { return {...prevState, results: SearchQueryJson}});
        }
        getSearched();

    }, [setQuery, query.input])


    return (
        <input 
            className='query-input' 
            placeholder='Пошук...' 
            type="text"
            onChange={(e) => setQuery(prevState => { return {...prevState, input: e.target.value} })}
        /> 
    )
}

export default Query
