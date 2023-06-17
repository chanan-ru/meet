import React, { Component } from "react";

class Event extends Component {

    state = { collapsed: true };

    toggleDetails = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    };
    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
            <div>
                <h1 className="summary">{event.summary}</h1>
                <p className="eventDate">{new Date(event.start.dateTime).toString()}</p>
                <p className="eventLocation">{event.location}</p>

                {this.state.collapsed === false && (
                    <>
                        <p className="description">{event.description}</p>
                        <p className="creator">{event.creator.email}</p>
                    </>
                )}
                <div className="btn_section">
                    <button className="detailButton" onClick={() => this.toggleDetails()}>
                        {collapsed ? "Show" : "Hide"} details
                    </button>
                </div>
            </div>
        )
    }
}

export default Event;