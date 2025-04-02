
import React, { useState } from 'react';

function InputField(){
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <h3>Hello, {name}</h3>
        </div>
    );
}

export default InputField;