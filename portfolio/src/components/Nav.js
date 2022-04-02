import github from "../img/github-square-brands.svg";
import linkedin from "../img/linkedin-brands.svg";
import sun from "../img/sun-solid.svg"
import moon from "../img/moon-solid.svg"

export default function Nav(props){
  return (
    <div className="navigation">
      <h4>Jovany</h4>

      <div className="navigation--menu">
        {/* Navigation */}
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#hireme">Hire Me</a>
          <img src={github} alt="github logo" className="nav--social"/>
          <img src={linkedin} alt="linkedin logo" className="nav--social"/>
        </nav>

        {/* Light Mode */}
        <div>
          <input type="checkbox" className="checkbox" id="checkbox" value={props.mode} onClick={props.handleClick}
          />
          <label htmlFor="checkbox" className="nav--mode">
            <img src={sun} className="nav--icon nav--sun"/>
            <img src={moon} className="nav--icon nav--moon"/>
            <div className="ball"></div>
          </label>

        </div>
      </div>
    </div>
  )
}