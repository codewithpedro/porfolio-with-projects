import { Link } from "react-router-dom";

export default function SmallProject({id, title, img, previewUrl}) {
  return (
      <div className="small-project">
        <Link className="link" to={previewUrl}>
          <div className="small-container">
            <p className="title">{title}</p>
            <img src={img} />
          </div>
        </Link>
      </div>
    
  )
}