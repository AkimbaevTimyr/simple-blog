import * as axios from 'axios'
import { setUsers } from '../../actions/users'
import {  useDispatch, useSelector } from 'react-redux'
import UsersDescription from '../Description/UsersDescription'


const Users = () =>{


    const dispatch = useDispatch()

    axios.get("https://api.github.com/users").then((responce)=> dispatch(setUsers(responce.data)))

    const users = useSelector(state=> state.usersPage.user.map((u) => <UsersDescription userId id={u.id} login={u.login} avatar={u.avatar_url} gitHubUrl={u.html_url} />))

    return(
        <div>{users}</div>
    )
}

export default Users