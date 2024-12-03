import React from "react";
import { useEffect } from "react";
import './App.css';
import search from "./search.svg"
//API key 87a9f052

const API_URL = 'https://www.omdbapi.com?apikey=87a9f052'
const App = () => {

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()

      console.log(data)
    }

    useEffect(() => {
      searchMovies('Avengers')
    }, [])

    return (
    <h1>Movies</h1>
)
}

export default App;     