import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./color-scheme.css"

export default function ColorScheme(props){
  const [inputColor, setInputColor] = useState("#F55A5A");
  const [type, setType] = useState("monochrome");
  const [colors, setColors] = useState(["#C01010", "#EE2121", "#F45B5B", "#F99696"]);

  function setColor(color) {
    setInputColor(color);
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

  function useColorScheme(){
    const newColors = [];
    const hexValue = inputColor.substring(1);
    // Fetch the color scheme generator 
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${type}&count=4`)
      .then(res => res.json())
      .then(data => {
        for (let i=0; i < data.colors.length; i++) {
          newColors.push(data.colors[i].hex.value)
        }
        setColors(newColors);
    });
  }

  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="colors-generator">
        <div className="height">
          <div className="container">
            <h2 className="title text-colored">Color Generator</h2>
                <div className="user-input">
                    <label htmlFor="colorpicker"></label>
                    <input type="color" id="colorpicker" defaultValue={inputColor} onChange={e => setColor(e.target.value)}/>
                    <label htmlFor="mode"/>
                    <select name="mode" id="mode" onChange={e => setType(e.target.value)}>
                        <option value="monochrome">Monochrome</option>
                        <option value="monochrome-dark">Monochrome-dark</option>
                        <option value="monochrome-light">Monochrome-light</option>
                        <option value="analogic">Analogic</option>
                        <option value="complement">Complement</option>
                        <option value="analogic-complement">Analogic-complement</option>
                        <option value="triad">Triad</option>
                    </select>
                    <button className="btn" onClick={useColorScheme}>Get color scheme</button> 
                </div>
                <div className="colors-container">
                    <div className="colors">
                        <div className="color-box" style={{backgroundColor: inputColor}}></div>
                        <div className="color-box" style={{backgroundColor: colors[0]}}></div>
                        <div className="color-box" style={{backgroundColor: colors[1]}}></div>
                        <div className="color-box" style={{backgroundColor: colors[2]}}></div>
                        <div className="color-box" style={{backgroundColor: colors[3]}}></div>
                    </div>
                    <div className="text-container">
                        <div className="input-container">
                          <label htmlFor="color-one-text" className="sr-only">Color One Hex code</label>
                          <input readOnly={true} defaultValue={inputColor} className="colors-text" id="color-one-text" onClick={e => copy(e.target.value)}/>
                        </div>
                        

                        <div className="input-container">
                          <label htmlFor="color-two-text" className="sr-only">Color Two Hex code</label>
                          <input readOnly={true} defaultValue={colors[0]} className="colors-text" id="color-two-text" onClick={e => copy(e.target.value)} />
                        </div>

                        <div className="input-container">
                          <label htmlFor="color-three-text" className="sr-only">Color Three Hex code</label>
                          <input readOnly={true} defaultValue={colors[1]} className="colors-text" id="color-three-text" onClick={e => copy(e.target.value)}/>
                        </div>

                        <div className="input-container">
                          <label htmlFor="color-four-text" className="sr-only">Color Four Hex code</label>
                          <input readOnly={true} defaultValue={colors[2]} className="colors-text" id="color-four-text" onClick={e => copy(e.target.value)}/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="color-five-text" className="sr-only">Color Five Hex code</label>
                            <input readOnly={true} defaultValue={colors[3]} className="colors-text" id="color-five-text" onClick={e => copy(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}