import React from "react";
import Task from "./Task";

const TodoList = (props) => {
  const { todoList, deleteTask } = props;
  return (
    <>
      {todoList.map((todo) => {
        return <Task todo={todo} key={todo.id} deleteTask={deleteTask} />;
      })}
    </>
  );
};

export default TodoList;
