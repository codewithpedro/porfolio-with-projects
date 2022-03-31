function Log({id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
  return (
    <div className="">
      <article className="article flex">
        <img src={imageUrl} alt={title} />
        <div className="info">
          <div className="info-map flex">
            <p className="fs-100"><i className="fa-solid fa-location-dot text-pink info-link"></i><span className="letter-space-1 uppercase"> {location}</span></p>
            <a className="info-map-link text-grey fs-100" href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="info-title">{title}</h1>
          <p className="info-date fs-200">{startDate} - {endDate}</p>
          <p className="info-desc fs-200">{description}</p>
        </div>
      </article>
      <hr/>
    </div>
  )
}

export default Log;