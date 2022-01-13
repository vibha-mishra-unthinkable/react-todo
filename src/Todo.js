import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import Header from "./Header";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const addTask = (userInput) => {
    const newTodoList = [
      ...todoList,
      { id: new Date().getTime().toString(), task: userInput },
    ];
    setTodoList(newTodoList);
  };
  const deleteTask = (id) => {
    const filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  };
  return (
    <div className="App">
      <Header />
      <TodoInput addTask={addTask} />
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} deleteTask={deleteTask} />
      ) : (
        <h1 className="noTask">No task </h1>
      )}
    </div>
  );
};

export default Todo;
