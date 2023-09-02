import React, { Component } from 'react';
import './TaskPlanner.css';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import axios from 'axios';

class TaskPlanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsToShow: 'all',
            id: '',
            item: '',
            editItem: false,
            message: '',
        };
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            const tasks = response.data;
            this.setState({ items: tasks });
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    handleChange = (event) => {
        this.setState({
            item: event.target.value,
        });
    };

    handleSubmit = async (event, newItem) => { // Receive the event object and newItem
        event.preventDefault();

        const newTask = {
            title: newItem, // Use newItem to set the title
            completed: false,
        };

        try {
            const response = await axios.post('/api/tasks', newTask);
            const task = response.data;
            this.setState((prevState) => ({
                items: [...prevState.items, task],
                item: '',
                message: 'Task saved successfully',
            }));
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    updateTodosToShow = (string) => {
        this.setState({
            itemsToShow: string,
        });
    };

    handleDoneTask = async (id, completed) => {
        const updatedTask = { completed: !completed };

        try {
            await axios.put(`/api/tasks/${id}`, updatedTask);
            this.setState((prevState) => ({
                items: prevState.items.map((item) =>
                    item._id === id ? { ...item, completed: !completed } : item
                ),
            }));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    handleDelete = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            this.setState((prevState) => ({
                items: prevState.items.filter((item) => item._id !== id),
                message: 'Task deleted successfully',
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    handleEdit = (id) => {
        const selectedItem = this.state.items.find((item) => item._id === id);
        this.setState({
            id: id,
            item: selectedItem.title,
            editItem: true,
        });
    };

    handleDeleteAllTasks = async () => {
        try {
            await axios.delete('/api/tasks/all');
            this.setState({
                items: [],
                message: 'All tasks deleted successfully',
            });
        } catch (error) {
            console.error('Error deleting all tasks:', error);
        }
    };

    handleDeleteDoneTasks = async () => {
        const { items } = this.state;
        const completedTasks = items.filter((item) => item.completed);
        const idsToDelete = completedTasks.map((task) => task._id);

        try {
            await axios.delete('/api/tasks/completed', { data: { taskIds: idsToDelete } });
            const updatedItems = items.filter((item) => !item.completed);
            this.setState({
                items: updatedItems,
                message: 'Completed tasks deleted successfully',
            });
        } catch (error) {
            console.error('Error deleting completed tasks:', error);
        }
    };

    render() {
        let items = [];

        if (this.state.itemsToShow === 'all') {
            items = this.state.items;
        } else if (this.state.itemsToShow === 'todo') {
            items = this.state.items.filter((item) => !item.completed);
        } else if (this.state.itemsToShow === 'done') {
            items = this.state.items.filter((item) => item.completed);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-11 mx-auto ml-4">
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            message={this.state.message}
                            fetchTasks={this.fetchTasks}
                        />
                        <TodoList
                            items={items}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            handleDoneTask={this.handleDoneTask}
                            handleDeleteDoneTasks={this.handleDeleteDoneTasks}
                            updateTodosToShow={this.updateTodosToShow}
                            fetchTasks={this.fetchTasks}
                            handleDeleteAllTasks={this.handleDeleteAllTasks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPlanner;