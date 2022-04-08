export default function SubmitQuestion(props){
  const displayAnswers = props.answersArray.map((answer, index) => {
    //Creates a unique name for id
    //Need for label and input match values
    const uniqueName = props.name + "-choice-" + index;

    // Checks to see if user answered
    const hasAnswered = props.userAnswer !== undefined;

    //Make sure user has answer
    //check to see if the current answer is the user selected answer
    const isSame_Answer_Input = hasAnswered && props.userAnswer === answer;

    //Check to see if current answer is the correct answer
    const isSame_Answer_CorrectAnswer = answer === props.answer;

    // Styles for wrong answers and the right answer
    //First checks if the answer is correct
    //Then checks if user input is wrong answer
    //Otherwise no style needed
    const styles = isSame_Answer_CorrectAnswer ? {backgroundColor: "#94D7A2", border: "none"} : isSame_Answer_Input ? {backgroundColor: "red", border: "none"} : {style : ""};


    return (
      <div key={uniqueName}>
        <input type="radio" id={uniqueName} name={props.name} value={answer} disabled={true} style={styles}/>
        <label htmlFor={uniqueName} disabled={true} style={styles}>{answer} </label>
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