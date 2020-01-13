import React, { useState } from 'react'; // Importing useState method, React hooks

const Counter = () => { // Functional component as class components aren't necessary
    const [count, setCount] = useState(0); // Setting the initial state for count, 
                                           // and the setState method for that particular parameter

    const handleClick = (e) => { // Click handler called from the button, but retaining the context of 
                                 // the functional component as an anonymous/arrow function
        setCount(count + 1); // Update the React state, calls render after update
    }

    return ( // Called everytime a change is made with any of the useState methods
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                Add One
            </button>
        </div>
    )


}