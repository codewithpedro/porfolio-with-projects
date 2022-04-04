import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState(
        {name: "", email: "", message: ""});

  console.log(form);

  function handleChange(event){
    setForm(prevForm => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="contact" id="contact">
      <i class="fa-solid fa-message"></i>
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
            <button className="btn btn-mid"><i class="fa-solid fa-paper-plane"></i> Submit</button>
          </form>
          <hr></hr>
          <div className="other-contact">
            <h3 className="heading">Contact me in <br/> other ways</h3>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest-square"></i>
            <a href="mailto:gomez.pedro@Outlook.com">gomez.pedro@outlook.com</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}