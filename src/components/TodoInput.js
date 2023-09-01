import React, { Component } from 'react';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
        };
    }

    handleChange = (event) => {
        this.setState({ newItem: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { newItem } = this.state;
        this.props.handleSubmit(event, newItem); // Pass the event object
        this.setState({ newItem: '' });
    };

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={this.handleSubmit}>
                    <label
                    >Task
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            value={this.state.newItem}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit" className="btn btn-sm btn-block mt-3 btn-info">
                        Add new task
                    </button>
                </form>
            </div>
        );
    }
}
