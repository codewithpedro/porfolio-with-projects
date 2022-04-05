function Log({id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
  return (
    <div>
      <article className="article">
        <img src={imageUrl} alt={title} />
        <div className="info">
          <div className="map">
            <p><i className="fa-solid fa-location-dot"></i><span className="uppercase"> {location}</span></p>
            <a className="link" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
          <h2 className="title text-colored">{title}</h2>
          <p className="date">{startDate} - {endDate}</p>
          <p className="desc">{description}</p>
        </div>
      </article>
      <hr className="linebreak"/>
    </div>
  )
}

export default Log;