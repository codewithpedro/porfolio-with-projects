import { useState } from "react";
import Length from "./Length";
import Mass from "./Mass";
import Volume from "./Volume";

export default function MetricConversion() {

  const [unit, setUnit] = useState(0);
  console.log(unit);

  return (
    <div className="card">
      <div className="card--main">
        <h1 className="title">Metric / Imperial Unit Conversion</h1>
        <input type="number" value={unit} className="input" id="metericInput" onInput={e => setUnit(e.target.value)}/>
      </div>
      <div className="card--conversions">
        <Length input={unit}/>
        <Mass input={unit}/>
        <Volume input={unit}/>
      </div>
    </div>
  );
}