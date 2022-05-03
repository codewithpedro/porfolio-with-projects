import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./movie-watchlist.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieElement from "./MovieElement";

export default function SavedWathchlist(props){
  const isNullSavedMovies = localStorage.getItem("savedMovies") === null;

  const [movieIDList, setMovieIDList] = useState(isNullSavedMovies ? [] : JSON.parse(localStorage.getItem("savedMovies")));
  
  
  const [movieDataList, setMovieDataList] = useState([]);

  const movieElements = movieDataList.map(movieObj => {
    return <MovieElement key={movieObj.imdbID} movie={movieObj} btn="remove" handleChange={() => removeMovieId(movieObj.imdbID)}/>
  });

  function removeMovieId(id) {
    const newList = movieIDList.filter(movieID => movieID !== id)
    localStorage.setItem("savedMovies", JSON.stringify(newList));
    setMovieIDList(newList);
}


  useEffect(() => {
    const promisesMovieData = movieIDList.map(movieID => { 
      return fetch(`https://www.omdbapi.com/?apikey=324df79f&i=${movieID}`)
          .then(res => res.json())
          .then(data => {return data}); 
      })
    
      Promise.all(promisesMovieData).then(result => {
        setMovieDataList(result);
    });  
  }, [movieIDList]);
  
  return (
    <>
      {/* Navigation */}
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="movie-watchlist">
        <div className="height">
          <div className="saved-movies">
            <header>
              <div className="hero">
                  <div className="content">
                      <h1 className="title">My Watchlist</h1>
                      <Link to="/movie-watchlist"><small className="btn-primary">Search for movies</small></Link>
                  </div>
              </div>
              </header>
              <main>
                <div className="container">
                    {(movieIDList.length === 0) && <div className="message">
                      <h3 className="title">Your watchlist is looking a little empty...</h3>
                      <Link to="/movie-watchlist"><i className="fa-solid fa-circle-plus"></i> Let’s add some movies!</Link>
                    </div>}
                    <div className="movie-list">
                      {movieElements}
                    </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}