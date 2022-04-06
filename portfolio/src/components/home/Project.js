import { Link } from "react-router-dom";

export default function Project({id, title, img, toolbox, desc, previewUrl, githubUrl}) {
  const tools = toolbox.map(toolbox => (
    <div className="pill" key={toolbox.id}>
      <p>{toolbox.tool}</p>
    </div>
    )
  );
  return (
    <div className="project">
      <h3 className="mobile-title"><span className="text-colored">{title}</span></h3>

      <div className="project--flex">
        <img src={img} className="pic" alt="project"/>
        <div className="project--content">
          <h3 className="desktop-title"><span 
          className="text-colored">{title}</span></h3>
          <h4 className="title-toolbox">ToolBox</h4>
          <div className="pill-flex">
           {tools}
          </div>
          <h4 className="title-desc">Description</h4>
          <p className="desc">{desc}</p>
          <div className="btn-flex">
            <Link className="btn btn-mid btn-white btn-preview" to={previewUrl}><i className="fa-solid fa-up-right-from-square"></i>Preview</Link>
            <a className="btn btn-transparent btn-small" href={githubUrl} target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github-square"></i> GitHub Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}