import React from 'react';

class Counter extends React.Component { // Create a React Class component
    constructor(props) {
        super(props); // Initialize the instance of the component with props

        this.state = { // Set initial state with default values
            count: 0
        };

        this.handleClick = this.handleClick.bind(this); // Binding the handler to use the correct "this"
    }

    handleClick(e) { // Click handler called from the context of the button
        this.setState({ count: this.state.count + 1 }); // Updates the react state, calls render after update
    }

    render() { // Called everytime a change in state is made with setState
        return (
            <div>
                {count}
                <button onClick={this.handleClick}>
                    Add One
                </button>
            </div>
        )
    }
}