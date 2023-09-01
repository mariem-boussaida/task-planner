import React, { Component } from 'react';

export default class TodoItem extends Component {
    handleDoneTask = () => {
        const { id, handleDoneTask, completed } = this.props;

        // Call the handleDoneTask function from TodoList and pass the id and completed status
        handleDoneTask(id, completed);
    };

    handleDelete = () => {
        const { id, handleDelete } = this.props;
        handleDelete(id);
    };

    render() {
        const { title, completed } = this.props;

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={`mt-1 mb-0 align-middle ${completed ? 'completed-task' : ''}`}>{title}</h6>
                <div className="todo-icon">
                    <span
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={this.handleDoneTask}
                    >
                        <i className={`${completed ? 'far fa-check-square' : 'far fa-square'}`} />
                    </span>
                    <span
                        className="mx-2 text-danger"
                        onClick={this.handleDelete}
                    >
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}
