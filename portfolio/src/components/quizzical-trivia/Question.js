import { useState } from "react";

export default function Question(props){
  // Select all Answers from API Call
  const answersArray = [...props.data.incorrect_answers, props.data.correct_answer];

  // Decode Answers from answeraArray
  const decodeArray = answersArray.map(answer => atob(answer));

  // Decode Question
  const decodeQuestion = atob(props.data.question)

  // Shuffle the answers
  const shuffleArray = shuffle(decodeArray);

  const uniqueName = (atob(props.data.category)).replace(/\s/g, "") + "-" + props.id;

  const uniqueId = (atob(props.data.category)).replace(/\s/g, "") + "-" + props.id + "choice-";

  // Best usecase for shuffling an array
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  // Displays the answers in radio input
  const displayAnswers = shuffleArray.map((answer, index) => {
    return (
      <div key={index}>
        <input type="radio" id={uniqueId + index} name={uniqueName} value={answer} onChange={props.handleChange} />
        <label htmlFor={uniqueId + index}>{answer}</label>
      </div>)
  })

  return (
    <div className="question">
      <h2>{decodeQuestion}</h2>
      <div className="answers">
        {displayAnswers}
      </div>
      <hr />
    </div>
  )
}