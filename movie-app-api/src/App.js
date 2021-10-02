import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from "./components/MovieList";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const getMovieRequest = async() => {
    const url = "https://www.omdbapi.com/?s=avengers&i=tt3896198&apikey=5970b0ef"
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setMovies(responseJson.Search)
  }

  useEffect(() => {
    getMovieRequest()
  }, [])

  return(
    <div className="container-fluid movie-app">
    <div className="row">
      <MovieListHeading heading="Movies"/>
      <SearchBox/>
    </div>
    <div className="row">
      <MovieList movies={movies}/>

    </div>
    </div>
  )
}

export default App;
