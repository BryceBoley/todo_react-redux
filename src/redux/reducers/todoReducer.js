

const initialState = [

    { todo: "Create a todo",  id:0, completed: true },
    { todo: "Add new functionality",  id:1, completed: true},
    { todo: "Change a property",  id:2, completed: false},
    { todo: "Take a break",  id:3, completed: false}
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [...state, {todo: action.payload.todo, id: action.payload.id, completed: false }];
    }
    case "DELETETODO": {
      var todos = [...state];
      const result = todos.filter(checkId);
      function checkId(todo){
        return todo.id != action.id 
      }      
      return result;     
    }
       
    case "TOGGLETODO": {
      return state;
    }
    default:
        return state;
    }}
export default todoReducer;