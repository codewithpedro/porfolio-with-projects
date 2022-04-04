export default function Volume(props){
  function kilosToPounds(inputValue){
    return (inputValue * 2.205).toFixed(3);
  }

  function poundsToKilos(inputValue){
    return (inputValue / 2.205).toFixed(3);
  }

  const userInput = props.input || 0;

  return (
    <div className="unit-conversion">
      <h5 className="title">Mass (Kilograms / Pounds)</h5>
      <p>{userInput} kilos = {kilosToPounds(props.input)} </p>
      <p> {props.input} pounds = {poundsToKilos(userInput)}</p>
    </div>
  );
}