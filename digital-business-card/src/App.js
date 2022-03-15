import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="card-bg">
      <div className='card'>
        <img src="./images/link" alt="profile picture" />
        <div className='info'>
          <h1>Pedro Jovany Gomez</h1>
          <p><span>Frontend Developer</span></p>
          <small>jovany.dev</small>
        </div>
        <div className='contact'>
          <a href="mailto:gomez.pedro@outlook.com">Email</a>
        </div>
      </div> 
    </div>
  );
}

export default App;
