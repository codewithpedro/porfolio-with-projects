import { useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import UnitConverter from './components/unit-converter/UnitConverter';
import ScrollToTop from './components/ScrollToTop';
import TravelJournal from './components/travel-journal/TravelJournal';
import DigitalCard from './components/digital-business-card/DigitalCard';
import PasswordGenerator from './components/password-generator/PasswordGenerator';
import InvoiceCreator from './components/invoice-creator/InvoiceCreator';
import ColorScheme from './components/color-scheme-generator/ColorScheme';
import MovieWatchlist from './components/movie-watchlist/MovieWatchlist';
import SavedWatchlist from './components/movie-watchlist/SavedWatchlist';
import QuizzicalTrivia from './components/quizzical-trivia/QuizzicalTrivia';
import StartQuiz from './components/quizzical-trivia/StartQuiz';

function App() {
  // is local storage for mode null
  const isNull = localStorage.getItem("mode") === null;  
  // set isDarkMode true if null, otherwise set to 
  //local storage "mode"
  const [isDarkMode, setIsDarkMode] = useState(isNull ? true : JSON.parse(localStorage.getItem("mode")));
  localStorage.setItem("mode", JSON.stringify(isDarkMode));  

  if (isDarkMode) {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
  
  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  ScrollToTop();

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home toggleMode={toggleMode} mode={isDarkMode}/>} />
        <Route path="/unit-converter" element={<UnitConverter toggleMode={toggleMode} mode={isDarkMode}/>} />
        <Route path="/travel-journal" element={<TravelJournal toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route path="/digital-business-card" element={<DigitalCard toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route path="/password-generator" element={<PasswordGenerator toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route path="/invoice-creator" element={<InvoiceCreator toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route path="/color-scheme-generator" element={<ColorScheme toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route exact path="/movie-watchlist" element={<MovieWatchlist toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route path="/movie-watchlist/saved-movies" element={<SavedWatchlist toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route exact path="/quizzical-trivia" element={<QuizzicalTrivia toggleMode={toggleMode} mode={isDarkMode} />} />
        <Route exact path="/quizzical-trivia/start" element={<StartQuiz toggleMode={toggleMode} mode={isDarkMode} />} /> 
      </Routes>
    </div>
  );
}

export default App;
