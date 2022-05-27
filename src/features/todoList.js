import { useSelector, useDispatch } from "react-redux";

const todos = useSelector((state) => state.todoReducer);
const dispatch = useDispatch();

const TodoList() {
    
    const RenderedTodoList = todos.length > 0 ? todos.map((todo) =>
        <RenderedTodoList key={todo.id} todo={todo.todo} >
            {todo.todo} <button ></button>
        </RenderedTodoList>
  
  ): <></>
};