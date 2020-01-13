// JavaScript XML (Extensible Markup Language)
import React, { useState } from 'react';

const JSXDemo = () => { // With React Hooks
    const [username, setUsername] = useState[''];

    return (
        <input 
            id="username" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.currentTarget.value)} // Set state in line with arrow function
        />
    )
}

const vanillaDemo = () => { // Without React, DOM manipulation
    let username = ""; // Simulate initial state

    const setUsername = (updatedUsername) => {
        username = updatedUsername; // Simulate setState
        usernameInput.value = updatedUsername; // Simulate rerender, force refresh
    }

    const usernameInput = document.getElementById("username"); // Grab the relevant component

    usernameInput.onchange = (e) => setUsername(usernameInput.value); // Attach onChange handler to component
}