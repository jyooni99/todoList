import React, { useState, useRef, useEffect } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onChecked, onEditing, onDelete }) => {
  const { id, isEditing, isDone, isDisabled, content } = todo;
  const [value, setValue] = useState(content);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className="todoItem">
      <input type="checkbox" checked={isDone} onChange={() => onChecked(id)} />
      <input
        type="text"
        className={
          isDone === true && isEditing === false ? "content isDone" : "content"
        }
        disabled={isDisabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <div className="todoBtnBox">
        <button
          className="changeBtn"
          type="button"
          onClick={() => onEditing(id, value)}
        >
          {isEditing ? "완료" : "수정"}
        </button>
        <button
          className="deleteBtn"
          type="button"
          onClick={() => onDelete(id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
