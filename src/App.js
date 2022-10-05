import {useEffect} from "react";
import MovieCard   from "./MovieCard";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`
const movie1 = {
    "Poster":"https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Shrek",
    "Type":"movie",
    "Year":"2001",
    "imdbID":"tt0126029"
}
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search)
    }
    useEffect(() => {
        searchMovies('Shrek')
    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <MovieCard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App;