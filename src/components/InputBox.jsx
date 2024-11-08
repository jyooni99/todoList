import React, { useState } from "react";
import "./InputBox.css";

const InputBox = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value === "") return;
    onCreate(value);
    setValue("");
  };

  const onKeySubmit = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="inputBox">
      <input
        type="text"
        id="todoInput"
        placeholder="Add Your Task"
        value={value}
        onChange={onChangeValue}
        onKeyDown={onKeySubmit}
        autoFocus
      />
      <button id="addBtn" type="button" onClick={onSubmit}>
        ADD
      </button>
    </div>
  );
};

export default InputBox;
