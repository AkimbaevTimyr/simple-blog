import { useSelector } from 'react-redux'
import ProfileDescription from '../Description/ProfileDescription'

const Profile = () => {

  let isAuth = useSelector((state) => state.authPage.auth)
  let Profile = useSelector((state)=> state.profilePage.profileInfo)
  return (<div>{isAuth === true ? Profile.map((p)=> <ProfileDescription name={p.name} job={p.job} livingPlace={p.livingPlace} gitHubLink={p.gitHubLink} gitHubNickName={p.gitHubNickName}/>) : <div className="authProfile">Пожалуйста Авторизуйтесь</div>}</div>)

  
};

export default Profile;
 