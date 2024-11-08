import React from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onChecked, onEditing, onDelete }) => {
  return (
    <ul id="todoList">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChecked={onChecked}
            onEditing={onEditing}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default List;
