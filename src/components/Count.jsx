import React from "react";

const Count = ({ todos }) => {
  return (
    <div className="total">
      <p>Completed Todos: {todos.filter((todo) => todo.isDone).length}</p>
      <p>Total Todos: {todos.length}</p>
    </div>
  );
};

export default Count;
