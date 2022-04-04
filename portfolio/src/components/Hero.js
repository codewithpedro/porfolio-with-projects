import portrait from "../img/portrait.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero--flex">
          <div className="circle">
            <img src={portrait} alt="portrait of Jovany" className="portrait"/>
          </div>

          <div className="hero-content" id="home">
            <h5 className="intro">Hi, Im <br/> Pedro <span className="text-colored">Jovany</span> Gomez</h5>
            <h1 className="title">Designer <br /> Software Engineer <br /> <span className="text-colored">Front-end Developer</span></h1>
            <p className="sub-title">Building beautiful professional <br /> websites and web applications</p>
            <a href="#contact"className="btn hero-btn btn-large">Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}