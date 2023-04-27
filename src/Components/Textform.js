import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
  const [fWord, setFWord] = useState("");
  const [rWord, setRWord] = useState("");

  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  const handleOnchangefind = (event) => {
    setFWord(event.target.value)
  }
  const handleOnchangeReplace = (event) => {
    setRWord(event.target.value)
  }
  const handleUpCase = () => {
    let upperCaseText = text.toUpperCase()
    setText(upperCaseText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoCase = () => {
    let lowerCaseText = text.toLowerCase()
    setText(lowerCaseText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClear = () => {
    let clearText = ""
    setText(clearText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCapCase = () => {
    let capCaseText = text.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(capCaseText);
    props.showAlert("Converted to capatilizing case", "success");
  }

  const findAndReplace = () => {
    let regf = new RegExp(fWord,'ig');
    let replacedText = text.replaceAll(regf, rWord)
    setText(replacedText)
    props.showAlert("Word replace", "success");
  }

  const handleCopy = () => {
   
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }
  const handleAleternating = () => {
    let alternate = text.toLowerCase().split("");
    for (var i = 0; i < alternate.length; i += 2) {
      alternate[i] = alternate[i].toUpperCase();
    }
    alternate = alternate.join("");
    setText(alternate)
    props.showAlert("Converted to alternating case", "success");
  };

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea className="form-control my-3" style={{ backgroundColor: props.mode === 'dark' ? '#0e2e36' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'}`} onClick={handleUpCase}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleLoCase}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleCapCase}>Convert to Capatalized Case</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleExtraSpaces}>Remove extra spaces</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleAleternating}>Convert to AlTeRnAtInG CaSe</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={handleClear}>Clear Text</button>
          <hr />
          <div className="container my-3">
            <h3>Find and Replace a Word:</h3>
            <p>Word to Find: <input type="text" className="form-control w-50 my-2" style={{ backgroundColor: props.mode === 'dark' ? '#02171c' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnchangefind} value={fWord} id="fWord" /></p>
            <p>Word to replace: <input type="text" className="form-control w-50 my-2" style={{ backgroundColor: props.mode === 'dark' ? '#02171c' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnchangeReplace} value={rWord} id="rWord" /></p>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-dark' : 'outline-info'} my-3 mx-1`} onClick={findAndReplace}>Find and Replace</button>
          </div>
        </div>
        <hr />
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>Your text contains {text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words and {text.length} characters</p>
          <p>{text.length > 0 ? 0.006 * text.split(" ").filter((e) => { return e.length !== 0 }).length : 0} Minutes to read</p>
          <h3>Preview:</h3>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  )
}

