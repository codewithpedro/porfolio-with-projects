import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState(
        {name: "", email: "", message: ""});

  function handleChange(event){
    setForm(prevForm => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div id="contact">
      <div className="contact overflow">
        <i className="fa-solid fa-message"></i>
        <div className="container">
          <h2 className="heading text-colored">Hire Me</h2>
          <div className="contact-flex">
            <form>
              <label htmlFor="name">Name:</label><br/>
              <input type="text" id="name" name="name" onChange={handleChange}/><br/>
              <label htmlFor="email">Email:</label><br/>
              <input type="email" id="email" name="email" onChange={handleChange}/><br/>
              <label htmlFor="message">Message:</label><br/>
              <textarea name="message" onChange={handleChange}></textarea><br />
              <button className="btn btn-mid"><i className="fa-solid fa-paper-plane"></i> Submit</button>
            </form>
            <hr />
            <div className="other-contact">
              <h3 className="heading">Contact me in <br/> other ways</h3>
              <div className="other-contact-flex">
                <a href="https://www.linkedin.com/in/itsjovany/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.pinterest.com/jovanydev" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-square"></i></a>
              </div>
              <a href="mailto:gomez.pedro@Outlook.com">gomez.pedro@outlook.com</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}