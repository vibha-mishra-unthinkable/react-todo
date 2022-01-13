import React from "react";
import "./App.css";

const Task = (props) => {
  const { id, task } = props.todo;
  const { deleteTask } = props;
  const handleDelete = (id) => {
    deleteTask(id);
  };
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={() => handleDelete(id)} className="deleteButton">
        X
      </button>
    </div>
  );
};

export default Task;
