export default function Length(props) {
  function metersToFeet(inputValue) {
    return (inputValue * 3.281).toFixed(3);
  }

  function feetToMetters(inputValue){
    return (inputValue / 3.281).toFixed(3)
  }

  return (
    <div className="unit-conversion">
      <h2 className="title">Length (Meter / Feet)</h2>
      <p>{props.input} meters = {metersToFeet(props.input)} feet | {props.input} feet = {feetToMetters(props.input)} meters</p>
    </div>
  )
}