import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }


    handleInputChanged = (event) => {
        // const enteredEventnumber = prompt('Please enter Events number between 1 - 32');
        const value = event.target.value;
        this.props.updateEvents(null, value);
        this.setState({
            query: value
        });

        if (value < 1 || value > 32) {
            alert("Please enter Events number between 1 - 32");
        }
    }

    render() {
        return (
            <div>
                <span>Number of Events: </span>
                <input
                    className="numberOfEvents"
                    type="number"
                    min={1}
                    max={32}
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}

export default NumberOfEvents;