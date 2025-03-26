// rfc
import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase button clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleloClick = ()=>{
        console.log("Lower Case button clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        console.log("Clear Text button clicked" + text)
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }
    
    const handleOnChange = (event)=>{
        console.log("On change button clicked")
        setText(event.target.value);
        
    }

    // hooks
    const [text, setText] = useState('');
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042745'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042745'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042745'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Estimated Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the box to preview it here"} </p>
        </div>
    </>
  )
}
