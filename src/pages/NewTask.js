import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    console.log(props);
    e.preventDefault();
    props.onAddTodo({ title, description });
    props.history.push("/");
  };

  return (
    <div className="container">
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>New Task</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What is your new task title ?"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="What is your new task description ?"
            as="textarea"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" type="submit">
            <i className="bi bi-plus-circle-fill"></i>
            <span className="ms-2">Add Task</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewTask;
