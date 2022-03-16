import './App.css';
import portrait from "./images/self-portrait.jpg"

function App() {
  return (
    <div className='card'>
      <img src={portrait} alt="profile picture" className='portrait'/>
      <div className='info card-container bg-dark-blue flow'>
        <div className='info-name'>
          <h1 className='fs-500 text-center'>Pedro Jovany Gomez</h1>
          <p className='text-sunset-orange text-center fs-300'>Frontend Developer</p>
          <p className='text-center fs-200'>jovany.dev</p>
        </div>
        <div className='info-contact flex flex-center'>
          <a className='btn btn-white fs-300' href="mailto:gomez.pedro@outlook.com"><i className="fa-solid fa-envelope"></i> Email</a>
          <a className='btn btn-blue fs-300' href="https://www.linkedin.com/in/itsjovany/"><i className="fa-brands fa-linkedin"></i>  LinkedIn</a>
        </div>
        <div className='flow'>
          <div className='info-about'>
            <h2 className="title fs-400 fw-600">About</h2>
            <p className='fs-200'>I am a frontend developer based in San Diego. A passionated developer who loves to design and code. I focus on creating gorgeous and friendly user application. Implementing new front-end components and tools.</p>
          </div>
          <div className='info-interests'>
            <h2 className='title fs-400 fw-600'>Interests</h2>
            <p className='fs-200'>Anime expert. Gamer and streamer. Internet fanatic. Spanish Soap Opera Enthusiast (Novela). Improv Actor.</p>
          </div>
        </div>
      </div>
      <div className='social-list card-container bg-dark-black'>
        <footer>
          <ul className='flex'>
            <li><a href="https://twitter.com/itsjovany"><i className="fa-brands fa-twitter-square"></i></a></li>
            <li><a href="https://www.facebook.com/itsjustjovany"><i className="fa-brands fa-facebook-square"></i></a></li>
            <li><a href="https://www.instagram.com/itsjovanyg/"><i className="fa-brands fa-instagram-square"></i></a></li>
            <li><a href="https://github.com/jovanydev"><i className="fa-brands fa-github-square"></i></a></li>
          </ul>
        </footer>
      </div>
    </div> 
  );
}

export default App;
