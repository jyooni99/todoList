import "./List.css";
import React from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onChecked, onEditToggle, onDelete }) => {
  return (
    <ul id="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChecked={onChecked}
          onEditToggle={onEditToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default React.memo(List);
