import { useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import UnitConverter from './components/unit-converter/UnitConverter';
import ScrollToTop from './components/ScrollToTop';
import TravelJournal from './components/travel-journal/TravelJournal';

function App() {
  // is local storage for mode null
  const isNull = localStorage.getItem("mode") === null;  
  // set isDarkMode true if null, otherwise set to 
  //local storage "mode"
  const [isDarkMode, setIsDarkMode] = useState(isNull ? true : JSON.parse(localStorage.getItem("mode")));
  localStorage.setItem("mode", JSON.stringify(isDarkMode));  
  localStorage.getItem("mode");

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
      </Routes>
    </div>
  );
}

export default App;
