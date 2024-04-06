import React, { useState } from 'react'
import './Text.css';

function Text() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);

    }
    return (
        <div className="text">
            <h1>Text Counter</h1>
            <div>
                <textarea type="text" onChange={handleChange} value={text} className='enter' ></textarea>
            </div>
            <button onClick={() => setText(text.toLowerCase())}>Lower Case</button>
            <button onClick={() => setText(text.toUpperCase())}>Upper Case</button>

            <br />
            Number of letter: {text.length}
            <br />
            Number of words:{text.trim().split(/\s+/).length}
        </div>
    )
}

export default Text