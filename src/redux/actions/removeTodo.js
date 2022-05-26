export const removeTodo = (id) => {
    return {
      type: "REMOVETODO",
      payload: id
    };
  };