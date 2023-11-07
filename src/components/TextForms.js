import React, { useState } from "react";
import refresh from '../refresh.png'

export default function TextForms(props) {
  const [text, setText] = useState('');
  // text = 'new text' wrong way to change the state
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const lowerCaseCnvrt = () => {
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleOnChange = (event) => {
    setText(event.target.value);

  }
  const refreshh = () => {
    setText("");
  }
  const handleCopy = () => {
    var text = document.getElementById('myText');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const countWords = (text) => {
    if (text.trim() === '') {
      return 0;
    }
    const words = text.split(" ");
    const filteredWords = words.filter(word => word !== "");
    return filteredWords.length;
  }
  return (
    <>
      <div className="mb-3 container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myText"
          rows="3"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#042748':'white', color:props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={lowerCaseCnvrt}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button  className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="mx-2 " onClick={refreshh} ><img src={refresh} style={{ height: '30px' }} alt="image" /></button>

      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>your text contains {countWords(text)} words and {text.length} characters including space</p>
        <b style={{ fontWeight: '1100', fontSize: '40px' }}>preview</b>
        <p style={{ fontWeight: '700' }}>{text.length>0?text:"Enter something in text-area to preview here"}</p>
        <p>Note: <br />Average time to read this context for average person is approx {0.008 * countWords(text)}minutes </p>

      </div>
    </>
  );
}
