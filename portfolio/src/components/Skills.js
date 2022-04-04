import ps from "../img/adobe-ps-transparent.svg";
import xd from "../img/adobe-xd-transparent.svg";

export default function Skills(){
  return (
    <div className="skills">
      <div className="container">
        <h2 className="heading">Skills</h2>
        <div className="skills-flex">
          <i className="fa-brands fa-html5 fa-3x"></i>
          <i className="fa-brands fa-css3-alt fa-3x"></i>
          <i className="fa-brands fa-js-square fa-3x"></i>
          <i className="fa-brands fa-react fa-3x"></i>
          <i className="fa-brands fa-github fa-3x"></i>
          <img src={ps} className="icon" alt="adobe photoshop logo"/>
          <img src={xd} className="icon" alt="adobe xd logo"/>
          
        </div>
      </div>
    </div>
  )
}