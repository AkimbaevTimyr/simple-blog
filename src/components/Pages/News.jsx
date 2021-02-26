import NewsDescription from '../Description/NewsDescription'
import { useSelector } from 'react-redux'
const News = () => {
  const news = useSelector(state=> state.newsPage.news.map(n => <NewsDescription id={n.id} postGroops={n.postGroops} postHeading={n.postHeading} postDescription={n.postDescription} postDate={n.postDate}/>))
  return (
    <div>
      { news }
    </div>
  );
};

export default News;
