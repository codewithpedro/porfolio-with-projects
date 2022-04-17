export default function Info() {
  return (
    <div className="info">
      <div className='sm-container'>
        <div className='name'>
          <h1>Pedro <span className="text-colored">Jovany</span> Gomez</h1>
          <h3 className='text-colored'>Frontend Developer</h3>
          <p>jovany.dev</p>
        </div>
        <div className='contact'>
          
          <a className='btn' href="https://www.linkedin.com/in/itsjovany/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i>  LinkedIn</a>
          <a className='btn btn-transparent btn-small' href="mailto:gomez.pedro@outlook.com"><i className="fa-solid fa-envelope"></i> Email</a>
        </div>
      </div>
    </div>
  )
}