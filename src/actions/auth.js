const SET_EMAIL = 'SET-EMAIL'
const SET_PASSWORD = 'SET-PASSWORD'
const AUTH = 'AUTH'
const AUTH_VALIDATOR = "AUTH_VALIDATOR"

export const setEmail = (email) => ({ type: SET_EMAIL, email })
export const setPassword = (password) => ({ type: SET_PASSWORD, password })
export const auth = () => ({ type: AUTH })
export const authValidator = (isAuth) => ({ type: AUTH_VALIDATOR , isAuth})
