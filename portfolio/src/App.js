import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  console.log(isDarkMode);
  return (
    <div>
      <Nav 
        mode={isDarkMode}
        handleClick={toggleMode}
        />
    </div>
  );
}

export default App;
