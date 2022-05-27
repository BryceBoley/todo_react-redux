const inititalState = [
    { todo: "Create a todo",  id:0 },
    { todo: "Add new functionality",  id:1},
    { todo: "Change a property",  id:2},
    { todo: "Take a break",  id:3}
];
const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [...state, {name: action.payload.todo, id: action.payload.id }];
    }
    default:
        return state;
  }

};
export default userReducer;