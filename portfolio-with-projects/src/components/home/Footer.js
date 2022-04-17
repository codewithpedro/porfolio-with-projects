export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-nav">
            <a href="/#home">Home</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Hire Me</a>
          </div>
          <div className="footer-logo">
            <a href="/#home"><h4 className="logo"><span className="text-colored">Jovany</span></h4></a>
          </div>
          <div className="footer-contact">
            <h4 className="heading">Contact:</h4>
            <a className="email" href="mailto:gomez.pedro@Outlook.com">gomez.pedro@outlook.com</a><br/>
            <a href="https://www.linkedin.com/in/itsjovany/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.pinterest.com/jovanydev" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-square"></i></a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}