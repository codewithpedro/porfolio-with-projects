export default function Question(props){
  const displayAnswers = props.answersArray.map((answer, index) => {
    const uniqueName = props.name + "-choice-" + index;
    return (
      <div key={uniqueName}>
        <input type="radio" id={uniqueName} name={props.name} value={answer} onChange={props.handleChange}/>
        <label htmlFor={uniqueName}>{answer}</label>
      </div>)
  })
  
  return (
    <div className="question">
      <h2>{props.question}</h2>
      <div className="answers">
        {displayAnswers}
      </div>
      <hr />
    </div>
  )
}