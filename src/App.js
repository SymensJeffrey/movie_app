import {useEffect} from "react";

// e9cb0175

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data)
    }
    useEffect(() => {
        searchMovies('Shrek')
    }, []);
    
    return (
        <h1>App</h1>
    );
}

export default App;