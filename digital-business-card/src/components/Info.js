function Info() {
  return (
      <div className='info container'>
        <div className='info--name flow'>
          <h1>Pedro Jovany Gomez</h1>
          <h3 className='text-sunset-orange'>Frontend Developer</h3>
          <p>jovany.dev</p>
        </div>
        <div className='info--contact'>
          <a className='btn btn-white' href="mailto:gomez.pedro@outlook.com"><i className="fa-solid fa-envelope"></i> Email</a>
          <a className='btn btn-blue' href="https://www.linkedin.com/in/itsjovany/"><i className="fa-brands fa-linkedin"></i>  LinkedIn</a>
        </div>
    </div>
  )
}

export default Info;