import { Link } from "react-router-dom";

export default function SmallProject({id, title, img, previewUrl}) {
  return (
    <div className="small-project">
      <p className="small-project--title">{title}</p>
      <Link to={previewUrl}><img src={img} /></Link>
    </div>
  )
}