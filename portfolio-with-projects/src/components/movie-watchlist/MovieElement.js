export default function MovieElement(props) {
  // Creates a short description of text
  function getShortDescription(text = ""){
    if (text.length > 120) {
        return text.substring(0, 120) + " ...read more";
    }
    
    return text;
  }

  return (
    <div className="movie">
      <h4 className="mobile-title">{props.movie.Title}</h4>
      <img src={props.movie.Poster} className="img" />
      <div className="content">
          <div className="desktop-title-rating">
              <h4 className="desktop-title">{props.movie.Title}</h4>
              <i className="fa-solid fa-star"></i><small className="rating">{props.movie.imdbRating}</small>
          </div>
          <div className="time-genre-btn">
            <div className="time-genre">
                <small className="time">{props.movie.Runtime}</small>
                <small className="genre">{props.movie.Genre}</small>
            </div>
            <div className="rating-btn">
              <i className="fa-solid fa-star mobile-rating"></i><small className="rating-star mobile-rating">{props.movie.imdbRating}</small>
                <button id={props.movie.imdbID} className="btn btn-small btn-watchlist" onClick={props.handleChange}><i className={props.btn === "add" ? "fa-solid fa-circle-plus" : " fa-solid fa-circle-minus"}> </i> {props.btn==="add" ?" Watchlist" : " Remove"}</button>
            </div>
          </div>
          <p className="desc">{props.movie.Plot}</p>
      </div>
    </div>
  )
}