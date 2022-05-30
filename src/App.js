import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/addTodo";
import { deleteTodo } from "./redux/actions/deleteTodo";
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
      dispatch(addTodo({ todo: inputTodo, id: todos.length}))
      setInputTodo("")
    } 
  }
 
  const handleOnClickDelete = e => {
    const id = e.target.parentElement.id;
    dispatch(deleteTodo(id))}
  
  const RenderedTodoList = todos.length > 0 ? todos.map((todo) =>
    
      <li 
        key={todo.id} 
        todo={todo.todo} 
        id={todo.id}>
          {todo.todo} 
          <button 
            onClick= {handleOnClickDelete} >
          </button>
      </li>

    ): <></>

  return (
    <div className="App">
      <ul className="todoList">
        {todos && RenderedTodoList}
      </ul>
      <br/>
      <hr></hr>
      <br/>
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