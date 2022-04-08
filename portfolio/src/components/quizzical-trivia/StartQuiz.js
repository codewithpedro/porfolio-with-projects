import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import Question from "./Question";
import "./quizzical-trivia.css";

export default function StartQuiz(props){
  const [questionData, setQuestionData] = useState([]);
  const [answerInput, setAnswerInput] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  console.log(answerInput);
  console.log(questionData);
  console.log("Rendering");

  function handleChange(event) {
    const {name, value} = event.target
    setAnswerInput(prevAnswers => {
        return {
            ...prevAnswers,
            [name]: value
        }
    })
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=base64")
      .then(res => res.json())
      .then(data => {
        setQuestionData(data.results);

        setQuestions(data.results.map((question, index) => {
          return <Question key={index} id={index} data={question} handleChange={handleChange}/>
        }));
    
      setAnswers(data.results.map(question => {
        return atob(question.correct_answer)
      }));

      });
  }, []);

  function fetchCompleted(results = []){

    setQuestionData(results);

    setQuestions(results.map((question, index) => {
      return <Question key={index} id={index} data={question} handleChange={handleChange}/>
    }));
    
    setAnswers(results.map(question => {
      return atob(question.correct_answer)
    }));
  }

  
  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="container">
          <div className="start-quiz">
            {questions}
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}