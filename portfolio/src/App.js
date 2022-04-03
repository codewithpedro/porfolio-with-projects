import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  if (isDarkMode) {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
  
  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div>
      <Nav 
        handleClick={toggleMode}
        />
    </div>
  );
}

export default App;
