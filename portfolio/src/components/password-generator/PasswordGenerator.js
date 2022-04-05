import { useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./password-generator.css"

export default function PasswordGenerator(props){
  const [passwords, setPasswords] = useState(["...", "...", "...", "..."])
  const [valueLength, setValueLength] = useState(6);

  // Generate password base on length, default to 6
  function randomPasswordGenerator(userInput = 6){
    let password = "";
    const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    const allCharacters = uppercase + lowercase + numbers + symbols;
    
    for (let i=0; i<userInput ; i++){
        password += allCharacters.substr(Math.floor(allCharacters.length*Math.random()), 1);
  }  
  return password;
}

  function generatePasswords(){
    if (valueLength === "" || valueLength < 6 || valueLength > 16) return;
    setPasswords(prevPasswords => prevPasswords.map(() => {return randomPasswordGenerator(valueLength)}));
  }

  function copy(valueInput){ 
        if (valueInput === "...") return;       
        navigator.clipboard.writeText(valueInput)
            .then(() => {
                // Success!
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
            
            
        alert("Copied the text: " + valueInput);
  }


  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="generator">
          <div className="container">
            <h1 className="title">Generate a <br/><span className="text-green">random password</span></h1>
            <h4 className="subtitle">Never use an insecure password again.</h4>
            <button className="btn" id="passwordBtn" onClick={generatePasswords}><i className="fa-solid fa-bolt-lightning"></i> Generate passwords</button>
            <div className="length">
              <label htmlFor="length-input">Length (6 to 16 length): </label> 
              <input type="number" value={valueLength} onChange={e => setValueLength(e.target.value)} className="input" id="length-input" required />
            </div>
            
            <hr className="linebreak"/>
            <div className="passwords">
                <label htmlFor="first-password" className="sr-only">First Password</label>
                <input type="text" className="input password" id="first-passowrd" value={passwords[0]} onClick={e => copy(e.target.value)} readOnly />

                <label htmlFor="second-password" className="sr-only">Second Password</label>
                <input type="text" className="input password" id="second-password" value={passwords[1]} onClick={e => copy(e.target.value)} readOnly />
                
                <label htmlFor="third-password" className="sr-only">Third Password</label>
                <input type="text" className="input password" id="third-password" value={passwords[2]} onClick={e => copy(e.target.value)} readOnly />
                
                <label htmlFor="Fourth-password" className="sr-only">Fourth Password</label>
                <input type="text" className="input password" id="Fourth-password" value={passwords[3]} onClick={e => copy(e.target.value)} readOnly />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}