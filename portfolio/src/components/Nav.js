import github from "../img/github-square-brands.svg";
import linkedin from "../img/linkedin-brands.svg";
import sun from "../img/sun-solid.svg";
import moon from "../img/moon-solid.svg";
import barsSolid from "../img/bars-solid.svg";
import xSolid from "../img/x-solid.svg"

import { useState } from "react";

export default function Nav(props){
  const [isOpen, setIsOpen] = useState(false);

  function setToggle() {
    setIsOpen(prevOpen => !prevOpen)
  }

  console.log("Nav is open: " + isOpen);

  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation-flex">
          <h4><span className="text-colored">Jovany</span></h4>

          <div className="navAndmode">

            {/* Mobile Navigation */}
            <button className={isOpen ? "mobile-nav-toggle active" : "mobile-nav-toggle"} aria-controls="primary-navigation" onClick={setToggle}><img src={isOpen ? xSolid : barsSolid} alt="mobile button"/><span className="sr-only">Menu</span></button>

            {/* Primaray Navigation */}
            <div className="navigation--menu">
              <nav className={isOpen ? "nav active" : "nav"}>
                <div id="primary-navigation" className="links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#hireme">Hire Me</a>
                </div>
                <div className="social">
                  <a href="https://www.linkedin.com/in/itsjovany/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo" className="icon linkedin"/></a>
                  <a href="https://github.com/jovanydev" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo" className="icon github"/></a>
                </div>
              </nav>

              {/* Mode Button*/}
              <div className="navigation--mode">
                <input type="checkbox" className="checkbox" id="checkbox" value={props.mode} onClick={props.handleClick}
                />
                <label htmlFor="checkbox">
                  <img src={sun} className="icon sun" alt="moon"/>
                  <img src={moon} className="icon moon" alt="sun"/>
                  <div className="ball"></div>
                </label>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}