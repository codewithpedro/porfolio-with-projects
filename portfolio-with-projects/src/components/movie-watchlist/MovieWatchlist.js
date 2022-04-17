import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./movie-watchlist.css";
import movieClip from "../../img/movie-clip.png"
import { useState } from "react";
import MovieElement from "./MovieElement";
import { Link } from "react-router-dom";

export default function MovieWatchlist(props) {
  const [movieDataList, setMovieDataList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const isNullSavedMovies = (localStorage.getItem("savedMovies") === null);

  const savedMovies = isNullSavedMovies ? [] : JSON.parse(localStorage.getItem("savedMovies"));
  const containsMovie = movieDataList.length !== 0;
  const movieElements = movieDataList.map(movieObj => {
    return <MovieElement key={movieObj.imdbID} movie={movieObj} btn="add" handleChange={()=> saveMovieId(movieObj.imdbID)}/>
  });

  function searchMovies() {
    setSearching(true);
    fetch(`https://www.omdbapi.com/?apikey=324df79f&s=${inputSearch}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Data not available right now")
            }  
            return res.json()
        })
        .then(movieIdList => {
            if (movieIdList.Response === "True") {
              const list = movieIdList.Search.map(movie => {return movie.imdbID})
              setIsNotFound(false);
              getAllMoviesData(list);
            } else {
              setMovieDataList([]);
              setSearching(false);
              setIsNotFound(true);
            }
        })
        .catch(error => console.log(error))
  }

  function getAllMoviesData(movieIdList){
    const promisesMovieData = movieIdList.map(movieID => { 
      return fetch(`https://www.omdbapi.com/?apikey=324df79f&i=${movieID}`)
          .then(res => res.json())
          .then(data => {return data}); 
      })
    
      Promise.all(promisesMovieData).then(result => {
        setMovieDataList(result);
        setSearching(false);
    });  
  }

  // Saves the movie id to local storage if id is not already in savedMovies
  function saveMovieId(id){
    if (!isIdInSavedMovies(id)) {
        savedMovies.push(id);
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        alert("Movie has been saved");
    } else {
      alert("Movie is already saved");
    }
  }

  // Returns true if id is already in savedMovies
  function isIdInSavedMovies(id="") {
    if (savedMovies.length === 0) return false;
    
    for (let i=0; i < savedMovies.length; i++) {
        if (savedMovies[i] === id) return true;
    }
    
    return false;
}

  return (
    <div>
      {/* Navigation */}
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      {/* movie-watchlist */}
      <div className="movie-watchlist">
        <div className="height">
          <header>
            {/* Hero section */}
            <div className="hero">
                <div className="content">
                    <h2 className="title">Find Your Film</h2>
                    <Link to="/movie-watchlist/saved-movies"><small>My Watchlist</small></Link>
                </div>
            </div>
          </header>
          <div className="container">
            {/* Searching input */}
            <div className="search">
              <label htmlFor="movie-search" className="sr-only">Search Movie</label>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="movie-search" placeholder="Search Movie" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
              <button onClick={searchMovies}>Search</button>
            </div>
            <main>
              {/* Message to user */}
              {!containsMovie && <div className="message">
                {!searching && !isNotFound &&
                  <img src={movieClip} alt="pysical movie film" className="img"/> } 

                {searching && <h3>Loading Movies</h3>}

                {isNotFound && <h3>Unable to find what you're looking for. Please try another search</h3>}
              </div>}
              {/* Movie list */}
              <div className="movie-list">
                {movieElements}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}