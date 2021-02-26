import { Route} from 'react-router-dom'
import MainPage from "./Pages/MainPage";
import News from "./Pages/News";
import Profile from "./Pages/Profile";
import Authorization from './Pages/Authorization'
import Add from './Pages/Add';
import Users from './Pages/Users';

const Body = () =>{
    return(
        <div>
            <Route path='/' render={()=> <MainPage />} exact/>
            <Route path='/news' render={()=> <News />} exact/>
            <Route path='/profile' render={()=> <Profile />} exact/>
            <Route path='/users' render={()=> <Users />} exact />
            <Route path='/authorization' render={()=> <Authorization />} exact/>
            <Route path='/add' render={()=> <Add />} exact />
        </div>
    )
}


export default Body