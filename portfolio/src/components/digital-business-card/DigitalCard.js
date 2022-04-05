import About from "./About";
import Socials from "./Socials";
import Info from "./Info";
import Interests from "./Interests";
import Portrait from "./Portrait";
import "./digitalCard.css"

import Nav from "../home/Nav"
import Footer from "../home/Footer"

export default function DigitalCard(props){
  return (
    <div className="digital-card">
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="digital-card-flex">
        <div className="small-width">
          <Portrait />
          <Info />
          <About />
          <Interests />
          <Socials />
        </div>
      </div>
      <Footer />
    </div>
  )
}