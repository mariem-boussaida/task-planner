import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    handleDelete = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            this.props.fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    handleDoneTask = async (id, completed) => {
        const updatedTask = { completed: !completed }; // Toggle between completed and uncompleted

        try {
            await axios.put(`/api/tasks/${id}`, updatedTask);
            this.props.fetchTasks(); // Fetch the updated tasks to reflect changes
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    render() {
        const {
            items,
            updateTodosToShow,
            handleDeleteAllTasks,
            handleEdit,
            handleDeleteDoneTasks,
        } = this.props;

        return (
            <Fragment>
                <h4 className="text-center">Todo list</h4>

                <div className="row">
                    <div className="col-md-4">
                        <button
                            type="button"
                            className="btn btn-sm btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("all")}
                        >
                            All
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button
                            type="button"
                            className="btn btn-sm btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("done")}
                        >
                            Done
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button
                            type="button"
                            className="btn btn-sm btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Todo
                        </button>
                    </div>
                </div>

                <div className="task-list-container my-2">
                    <ul className="list-group">
                        {items.map((item) => (
                            <TodoItem
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                completed={item.completed}
                                handleDelete={() => this.handleDelete(item._id)}
                                handleEdit={() => handleEdit(item._id)}
                                handleDoneTask={() => this.handleDoneTask(item._id, item.completed)}
                            />
                        ))}
                    </ul>
                </div>

                <div className="row mt-1">
                    <div className="col-md-6">
                        <button
                            type="button"
                            className="btn btn-sm btn-danger btn-block mt-1"
                            onClick={handleDeleteDoneTasks}
                        >
                            Delete done tasks
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button
                            type="button"
                            className="btn btn-sm btn-danger btn-block mt-1"
                            onClick={handleDeleteAllTasks}
                        >
                            Delete all tasks
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}
