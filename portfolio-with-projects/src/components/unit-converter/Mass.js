export default function Mass(props){
  function kilosToPounds(inputValue){
    return (inputValue * 2.205).toFixed(3);
  }

  function poundsToKilos(inputValue){
    return (inputValue / 2.205).toFixed(3);
  }

  const userInput = props.input || 0;

  return (
    <div className="unit">
      <h5 className="title">Mass (Kilograms / Pounds)</h5>
      <p>{userInput} kilos = {kilosToPounds(props.input)} </p>
      <p> {userInput} pounds = {poundsToKilos(userInput)}</p>
    </div>
  );
}