import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { useState } from "react";
import "./App.css"

function App() {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("")
  
  const handleChange = e => {
    setInputTodo(e.target.value) 
    
  }

  const handleKeyDown = e => {
    if (e.which === 13) {
      saveTheTodo()
    }
  }

  const handleOnClick = e => {
    saveTheTodo()
  }

  function saveTheTodo () {
    if (inputTodo !== "") {
      console.log(todos.length);
      console.log(inputTodo);
      console.log(addTodo({ todo:inputTodo, id:todos.length}));
      dispatch(addTodo({ todo: inputTodo, id: todos.length}))
      setInputTodo("")
    } 
  }
  const RenderedTodoList = todos.length > 0 ? todos.map((todo) =>
    <li key={todo.id} todo={todo.todo} >
      {todo.todo} <button ></button></li>
    ): <></>

  return (
    <div className="App">
      <ul>
        {RenderedTodoList}
      </ul>
      <input 
        type="text"   
        autoFocus={true} 
        value={inputTodo}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnClick}>add todo</button>
      <hr></hr>
    </div>
  );
}

export default App;