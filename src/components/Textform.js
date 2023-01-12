import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("upperCase is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Enabled", "success");
    }
    const handleLoClick = () => {
        console.log("LowerCase is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Enabled", "success");
    }
    const Clear = () => {
        console.log("clear");
        let newText = " ";
        setText(newText);
        props.showAlert("ClearButton Enabled", "success");
    }
    const titleCase = () => {
        console.log("title the text");


        let newText = text.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        setText(newText);
        props.showAlert("TitleCase Enabled", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event) => {
        console.log("on change");

        setText(event.target.value);
    }

    const [text, setText] = useState('enter text hare');
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div>
                <h1>{props.heading}</h1>
                {/* <h1>{`Enter the text to analyze below${props.mode === 'dark' ? 'light' : 'dark'}`}</h1> */}
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'light' : 'grey' }} id="mybox" rows={8} ></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={Clear}>Clear the text</button>
                <button className="btn btn-primary mx-2" onClick={titleCase}>Title The Text</button>
                <button className="btn btn-primary mx-2" onClick={speak}>speak The Text</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p>Number of word {text.split(" ").length} Number of character {text.length}</p>
                <p>Rading time of this paragraph is{0.08 * text.split(" ").length}</p>
            </div>
            <h1>Preview</h1>
            <span>{text}</span>
        </div>
    )
}
