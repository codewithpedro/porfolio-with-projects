import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import Question from "./Question";
import SubmitQuestion from "./SubmitQuestion";
import "./quizzical-trivia.css";

export default function StartQuiz(props){

  const [answerInput, setAnswerInput] = useState({});
  const [questionForm, setQuestionForm] = useState({});
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [again, setAgain] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);


  //Handles id radio name to value choosen
  function handleChange(event) {
    const {name, value} = event.target
    setAnswerInput(prevAnswers => {
        return {
            ...prevAnswers,
            [name]: value
        }
    })
  }

   // Best usecase for shuffling an array
   function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // 
  function submitAnswer(){
    setSubmitted(true);

    let total = 0;

    // Loop through questionForm keys
    // While Looping...
    // --Check to see if answerInput is the same as questionForm correct answer
    // --Return the form as radio checklist with stylying (red for incorrect, green for correct);
    setQuestions(Object.keys(questionForm).map(function(key, index) {
      if (answerInput[key] === questionForm[key].answer) {
        total += 1;
      }
      return (<SubmitQuestion key={index} {...questionForm[key]} userAnswer={answerInput[key]}/>)
    }))

    // Set the correct count to total
    setTotalCorrect(total);

  }

  // Reset the game
  function newGame() {
    setSubmitted(false);
    setQuestions([]);
    setQuestionForm({});
    setAnswerInput({});
    setTotalCorrect(0);
    setAgain(prevBool => !prevBool);
  }

  // Call the api
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=base64")
      .then(res => res.json())
      .then(data => {

      // Saving the questions ito a object form 
      data.results.forEach((question, index) => {
        //Decode Answer
        const decodeAnswer = atob(question.correct_answer);

        //Decode question
        const decodeQuestion = atob(question.question);

        // Create a unique name for each radio button
        //Also for key, id
        const uniqueName = index + "-" + (atob(question.category)).replace(/\s/g, "");

        // Select all Answers from API Call
        const answersArray = [...question.incorrect_answers, question.correct_answer];

        // Decode Answers from API Call
        const decodeArray = answersArray.map (answer => atob(answer));

        // Shuffle Array
        const shuffleArray = shuffle(decodeArray);

        // Set question to display
        setQuestions(prevItem => (
          [...prevItem, <Question key={index} question={decodeQuestion} name={uniqueName} answersArray={shuffleArray} handleChange={handleChange}/>]
        ))

        // Save question form
        setQuestionForm(prevForm => ({
          ...prevForm,
          [uniqueName]: {
            question: decodeQuestion,
            answer: decodeAnswer,
            answersArray: shuffleArray,
            name: uniqueName
          }
        })
      )

      })

      });
  }, [again]);

  
  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="container">
          <div className="start-quiz">
            {questions}
            <div className="button-content">
              {!submitted && <button onClick={submitAnswer} className="btn">Check Answers</button>}
              {submitted && <div className="score-button"><h2>You Score {totalCorrect}/5 correct answers</h2><button onClick={newGame} className="btn">Play again</button></div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}