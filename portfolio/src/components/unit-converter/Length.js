export default function Length(props) {
  function metersToFeet(inputValue) {
    return (inputValue * 3.281).toFixed(3);
  }

  function feetToMetters(inputValue){
    return (inputValue / 3.281).toFixed(3)
  }

  const userInput = props.input || 0;

  return (
    <div className="unit-conversion">
      <h5 className="title">Length (Meter / Feet)</h5>
      <p>{userInput} meters = {metersToFeet(userInput)} feet</p> 
      <p>{userInput} feet = {feetToMetters(userInput)} meters</p>
    </div>
  )
}