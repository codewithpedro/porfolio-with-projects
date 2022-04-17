import smallProjectData from "../../data/smallProjectData";
import SmallProject from "./SmallProject";

export default function SmallProjects() {
  const projects = smallProjectData.map(project => {
    return <SmallProject 
      key={project.id} 
      {...project}/>
  })
  return (
    <div className="small-projects">
      <div className="container">
        <h2 className="title">More Projects</h2>
        <div className="small-projects-flex">
          {projects}
        </div>
      </div>
    </div>
  )
}