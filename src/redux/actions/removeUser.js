export const removeUser = (id) => {
    return {
      type: "REMOVEUSER",
      payload: id
    };
  };