import "./App.css";
import React, { useRef, useReducer, useCallback } from "react";
import InputBox from "./components/InputBox";
import List from "./components/List";
import Title from "./components/Title";
import Count from "./components/Count";

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];

    case "CHECK":
      return todos.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "EDIT":
      return todos.map((todo) =>
        todo.id === action.targetId
          ? {
              ...todo,
              isEditing: !todo.isEditing,
              isDisabled: !todo.isDisabled,
              content: action.content,
            }
          : { ...todo, isEditing: false, isDisabled: true }
      );

    case "DELETE":
      return todos.filter((todo) => todo.id !== action.targetId);

    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const id = useRef(0);

  const handleCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: id.current++,
        isDone: false,
        isEditing: false,
        isDisabled: true,
        content,
      },
    });
  }, []);

  const handleAction = useCallback(
    (type) => (targetId, content) => {
      dispatch({ type, targetId, content });
    },
    []
  );

  return (
    <div id="wrap">
      <form id="todos" action="">
        <Title />
        <InputBox createTodo={handleCreate} />
        <List
          todos={todos}
          onChecked={handleAction("CHECK")}
          onEditToggle={handleAction("EDIT")}
          onDelete={handleAction("DELETE")}
        />
        <Count todos={todos} />
      </form>
    </div>
  );
}

export default App;
