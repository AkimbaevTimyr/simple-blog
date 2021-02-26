import { useSelector } from "react-redux";
import MainPagePost from '../MainPagePost'
const MainPage = () => {
  const postText = useSelector((state) =>
    state.mainPage.posts.map((p, index) => <MainPagePost index={p.id}text={p.text} theme={p.themeBody} authorName={p.author}/>)
  );
  
  return <div>{postText}</div>;
};

export default MainPage;
