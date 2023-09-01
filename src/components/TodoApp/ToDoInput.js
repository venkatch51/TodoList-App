import React from "react";
import { useTodoContext } from "../../context/TodoContext";

const ToDoInput = () => {
  let { inputRef, saveTodo } = useTodoContext()
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={() => {}}
          />
          <button className="input-group-text btn btn-success" id="basic-addon1" onClick={saveTodo}>
            save Todo
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoInput;
