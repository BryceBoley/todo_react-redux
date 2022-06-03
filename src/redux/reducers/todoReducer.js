

const initialState = [

  { todo: "Create a todo", id: 0, completed: true },
  { todo: "Add new functionality", id: 1, completed: true },
  { todo: "Change a property", id: 2, completed: false },
  { todo: "Take a break", id: 3, completed: false }
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [...state, { todo: action.payload.todo, id: action.payload.id, completed: false }];
    }
    case "DELETETODO": {
      var todos = [...state];
      const result = todos.filter(checkId);
      function checkId(todo) {
        console.log(todo.id);
        console.log(action.id);
        return todo.id != action.id
      }
      console.log(result);
      return result;
    }
    case 'TOGGLETODO':
      const myTodos = state.map(
        t => todo(t, action)
      );
      function todo(t, action) {
        if (t.id.toString() !== action.id) {
          return t;
        }
        return { ...t, completed: !t.completed };
      }
      return myTodos;
    default:
      return state;
  }
}
export default todoReducer;