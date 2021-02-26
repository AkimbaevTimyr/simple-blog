import { combineReducers, createStore } from "redux";
import AuthReducer from '../reducers/auth'
import MainReducer from '../reducers/main'
import ProfileReducer from '../reducers/profile'
import UserReducers from '../reducers/users'
import NewsReducer from '../reducers/news'
let reducers = combineReducers({
    authPage: AuthReducer,
    mainPage: MainReducer,
    profilePage: ProfileReducer,
    usersPage: UserReducers,
    newsPage: NewsReducer
})

let store = createStore(reducers)


export default store