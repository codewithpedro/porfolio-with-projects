export default function Volume(props){
  function kilosToPounds(inputValue){
    return (inputValue * 2.205).toFixed(3);
  }

  function poundsToKilos(inputValue){
    return (inputValue / 2.205).toFixed(3);
  }
  return (
    <div className="unit-conversion">
      <h2 className="title">Mass (Kilograms / Pounds)</h2>
      <p>{props.input} kilos = {kilosToPounds(props.input)} | {props.input} pounds = {poundsToKilos(props.input)}</p>
    </div>
  );
}