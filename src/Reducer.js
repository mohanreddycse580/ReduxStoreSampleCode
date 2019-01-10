export const reducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SUBMIT":
      return {
        email: action.payload.email,
        pswd: action.payload.pswd
      };

    default:
      return state;
  }
};
