import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./quizzical-trivia.css";
import quizImg from "../../img/quiz-class.png"
import { Link } from "react-router-dom";

export default function QuizzicalTrivia(props){
  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="container">
          <div className="quiz-trivia">
            <div className="content">
              <h1 className="title">Quizzical</h1>
              <p className="subtitle">A quick quizz for the mind</p>
              <Link to="/quizzical-trivia/start"><button className="btn">Start quiz</button></Link>
              <img src={quizImg} alt="student learning in class" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}