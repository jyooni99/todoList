import "./App.css";
import React, { useState, useRef } from "react";
import InputBox from "./components/InputBox";
import List from "./components/List";
import Title from "./components/Title";
import Count from "./components/Count";

const mockData = [
  {
    id: 0,
    isDone: false,
    isEditing: false,
    isDisabled: true,
    content: "투두리스트 만들기",
  },
  {
    id: 1,
    isDone: false,
    isEditing: false,
    isDisabled: true,
    content: "투두리스트 Create 구현",
  },
  {
    id: 2,
    isDone: false,
    isEditing: false,
    isDisabled: true,
    content: "저녁 맛있는 거 먹기",
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const id = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: id.current++,
      isDone: false,
      isEditing: false,
      isDisabled: true,
      content: content,
    };

    setTodos([newTodo, ...todos]);
  };

  const onChecked = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onEditing = (targetId, content) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? {
              ...todo,
              isEditing: !todo.isEditing,
              isDisabled: !todo.isDisabled,
              content: content,
            }
          : { ...todo, isEditing: false, isDisabled: true }
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div id="wrap">
      <form id="todos" action="">
        <Title />
        <InputBox onCreate={onCreate} />
        <List
          onChecked={onChecked}
          onEditing={onEditing}
          onDelete={onDelete}
          todos={todos}
        />
        <Count todos={todos} />
      </form>
    </div>
  );
}

export default App;
