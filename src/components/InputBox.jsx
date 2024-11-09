import React, { useState } from "react";
import "./InputBox.css";

const InputBox = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    createTodo(value);
    setValue("");
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div id="inputBox">
      <input
        type="text"
        id="todoInput"
        placeholder="Add Your Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeyUp}
        autoFocus
      />
      <button id="addBtn" type="button" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
};

export default InputBox;
