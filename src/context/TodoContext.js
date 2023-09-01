import { createContext, useContext, useRef, useState } from "react";

// create a context
const TodoContext = createContext({});

// create a Provider Component to make use of this component
export const TodoContextProvider = (props) => {
  let [todoList, setToDoList] = useState([])
  let inputRef = useRef()
  
  // save todo
  const saveTodo = (event) => {
    event.preventDefault();
    console.log('Form submitted')
    let inputValue = inputRef.current.value
    if(inputValue !=="") {
        let newTodo = { title: inputValue, isCompleted: false}
        setToDoList([newTodo,...todoList])
        inputRef.current.value = ""
    }
    console.log(todoList)
  }
  const updateTodoStatus = (index) => {
    let _todoList = [...todoList]
    _todoList[index].isCompleted = !_todoList[index].isCompleted
    setToDoList(_todoList)
  }
  let store = {
    todoList,
    inputRef,
    saveTodo,
    updateTodoStatus
  };
  return (
    <>
      <TodoContext.Provider value={store}>{props.children}</TodoContext.Provider>
    </>
  );
};

// create a custom to make the use of this context where ever we need
export const useTodoContext = () => {
  return useContext(TodoContext);
};
