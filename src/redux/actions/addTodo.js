export const addTodo = (todo, id, checked) => {
  return {
    type: "ADDTODO",
    payload: todo, id, checked
  };
};