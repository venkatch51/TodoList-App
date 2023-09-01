import React from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoList = () => {
  let { todoList, updateTodoStatus } = useTodoContext();
  let todoCompleteclass = "text-danger text-decoration-line-through fst-italic"
  console.log(todoList);
  return (
    <>
      <ul className="list-group">
        {todoList.map((todo,index) => {
          return (
            <li key={index} className="list-group-item">
              <input className="mx-2" type="checkbox" checked={todo.isCompleted} onChange={() => {updateTodoStatus(index)}}/>
              <span className={todo.isCompleted ? todoCompleteclass : ""}>{todo.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
