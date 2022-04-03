export default function Project({id, title, img, toolbox, desc}) {
  return (
    <div className="project">
      <h3 className="mobile-title"><span className="text-colored">{title}</span></h3>

      <div className="project--flex">
        {/* <img src={img} alt="project"/> */}
        <div className="pic"></div>
        <div className="project--content">
          <h3 className="desktop-title"><span className="text-colored">{title}</span></h3>
        </div>
      </div>
    </div>
  )
}