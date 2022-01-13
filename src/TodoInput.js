import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

const TodoInput = (props) => {
  const { addTask } = props;
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      addTask(userInput);
      setUserInput("");
    }
  };
  return (
    <div className="todoInput">
      <form onSubmit={handleSubmit}>
        <label>Enter Text: </label>
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          className="inputField"
        />
        <Button type="submit" title="Add+" className="submitButton" />
      </form>
    </div>
  );
};

export default TodoInput;
