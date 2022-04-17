import Nav from "../../components/home/Nav";
import Footer from "../../components/home/Footer";
import "./travel.css";
import Log from "./Log";
import travelData from "./travelData";
import TravelHeader from "./TravelHeader";

export default function TravelJournal(props){
  const logs = travelData.map(entry => {
    return <Log key={entry.id} {...entry} />
  })

  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="travel-logs">
          <div className="container">
            <TravelHeader />
            {logs}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}