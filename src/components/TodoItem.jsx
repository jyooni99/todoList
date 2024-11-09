import React, { useState, useRef, useEffect } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onChecked, onEditToggle, onDelete }) => {
  const { id, isEditing, isDone, isDisabled, content } = todo;
  const [inputValue, setInputValue] = useState(content);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditDone = (e) => {
    if (e.key === "Enter") {
      onEditToggle(id, inputValue);
    }
  };

  const inputClassName = `content ${isDone && !isEditing ? "isDone" : ""}`;

  return (
    <li className="todoItem">
      <input type="checkbox" checked={isDone} onChange={() => onChecked(id)} />
      <input
        type="text"
        className={inputClassName}
        disabled={isDisabled}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleEditDone}
        ref={inputRef}
      />
      <div className="todoBtnBox">
        <button
          className="changeBtn"
          type="button"
          onClick={() => onEditToggle(id, inputValue)}
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

export default React.memo(TodoItem);
