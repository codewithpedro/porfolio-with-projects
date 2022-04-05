export default function Volume(props){
  function littersToGallons(inputValue){
    return (inputValue / 3.785).toFixed(3);
  }

  function gallonsToLiter(inputValue){
    return (inputValue * 3.785).toFixed(3);
  }

  const userInput = props.input || 0;

  return (
    <div className="unit">
      <h5 className="title">Volume (Liters / Gallons)</h5>
      <p>{userInput} liters = {littersToGallons(userInput)} gallons </p>
      <p>{userInput} gallons = {gallonsToLiter(userInput)} liters</p>
    </div>
  );
}