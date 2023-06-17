import React, { Component } from "react";

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        //you’re using this.props.locations within the function because you’ll be passing it from the App component later on.
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;

        });
        this.setState({
            query: value,
            suggestions
        });
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });

        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <span>Location : </span>
                <input
                    className="city"
                    type="text"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked("all")}><b>See all cities</b></li>
                </ul>
            </div>
        )
    }
}

export default CitySearch;