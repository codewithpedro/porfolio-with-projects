export default function SmallProject({id, title, img, previewUrl}) {
  return (
    <div className="small-project">
      <p className="small-project--title">{title}</p>
      <a href={previewUrl} target="_blank" rel="noreferrer noopener"><img src={img} /></a>
    </div>
  )
}