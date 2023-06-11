import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }


    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value);
        this.setState({
            query: value
        });
    }

    render() {
        return (
            <div>
                <input className="numberOfEvents" type="number" min={1}
                    max={32}
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}

export default NumberOfEvents;