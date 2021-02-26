const SET_USERS = "SET_USERS"
const initialState ={
    user: []
}


const users = (state=initialState, action) =>{
    switch(action.type){
        case SET_USERS:
            return{
                ...state,
                user: action.users
            }
        default:
            return state
    }
}


export default users