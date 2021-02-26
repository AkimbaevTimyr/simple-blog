const SET_EMAIL = "SET-EMAIL";
const SET_PASSWORD = "SET-PASSWORD";
const AUTH = "AUTH";
const AUTH_VALIDATOR = "AUTH_VALIDATOR";
const initialState = {
  data: [{ id: 1, password: 12345, auth: false }],
  password: "",
  newPasswordValue: "",
  newLoginValue: "",
  login: "",
  auth: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state,
        newPasswordValue: action.password,
      };
    case SET_EMAIL:
      return {
        ...state,
        newLoginValue: action.email,
      };
    case AUTH:
      return {
        ...state,
        password: state.newPasswordValue,
        login: state.newLoginValue,
      };
    case AUTH_VALIDATOR:
      return {
        ...state,
        auth: action.isAuth,
      };
   
   
    default:
      return state;
  }
};

export default auth;
