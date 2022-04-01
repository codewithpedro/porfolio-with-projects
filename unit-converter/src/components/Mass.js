export default function Mass(props){
  function littersToGallons(inputValue){
    return (inputValue / 3.785).toFixed(3);
  }

  function gallonsToLiter(inputValue){
    return (inputValue * 3.785).toFixed(3);
  }

  return (
    <div className="unit-conversion">
      <h2 className="title">Volume (Liters / Gallons)</h2>
      <p>{props.input} liters = {littersToGallons(props.input)} gallons | {props.input} gallons = {gallonsToLiter(props.input)} liters</p>
    </div>
  );
}