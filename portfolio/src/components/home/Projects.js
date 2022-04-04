
import Project from "./Project";
import mainProjectData from "../../data/mainProjectData";

export default function Projects() {
  const myProjects = mainProjectData.map(project => {
    return <Project 
              key={project.id}
              {...project}
              />
  })

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="title">Latest Web Projects</h2>
        {myProjects}
      </div>
    </div>
  )
}