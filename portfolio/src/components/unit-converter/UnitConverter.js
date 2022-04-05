import { useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import Length from "./Length";
import Mass from "./Volume";
import Volume from "./Mass";
import "./UnitConverter.css";
import solving from "../../img/problem-solving-pana.svg";

export default function UnitConverter(props) {

  const [unit, setUnit] = useState("");
  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="unit-convertor">
          <div className="container">
            <div className="main">
              <h2 className="title text-colored">Metric / Imperial Unit Conversion</h2>
              <label htmlFor="metric-conversion" className="sr-only">Metric conversion input</label>
              <input type="number" value={unit} placeholder={"Insert Value"} className="input" id="metric-conversion" onInput={e => setUnit(e.target.value)}/>
            </div>
            <div className="conversions">
              <Length input={unit}/>
              <Mass input={unit}/>
              <Volume input={unit}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}