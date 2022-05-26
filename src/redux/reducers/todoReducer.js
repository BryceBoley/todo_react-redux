const inititalState = [
    { todo: "Create a todo",  id:0 },
    { todo: "Add new functionality",  id:1},
    { todo: "Change a property",  id:2},
    { todo: "Take a break",  id:3}
];
const todoReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [...state, {todo: action.payload.todo, id: action.payload.id }];
    }
    case "REMOVETODO": {
      return 
    }
    default:
        return state;
  }

};
export default todoReducer;