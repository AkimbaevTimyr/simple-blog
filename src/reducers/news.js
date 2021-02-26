const ADD_NEWS_GROOPS = "ADD_NEWS_GROOPS"
const ADD_POST_HEADING = "ADD_POST_HEADING"
const ADD_NEWS_DESCRIPTION = "ADD_NEWS_DESCRIPTION"
const ADD_NEWS_DATE = "ADD_NEWS_DATE"
const ADD_NEWS = "ADD_NEWS"
const initialState = {
    news:[
        {id: 1, postGroops: 'Компьютеры', postHeading: 'Новый Ноутбук', 
        postDescription: 'Вчера в продажу вступила новая модель компьютера', 
        postDate: "1 hours ago" },
    ],
    newsPostGroops: "",
    newsPostHeading: "",
    newsPostDescription: "",
    newsPostDate: ""
}



const news = (state=initialState, action) =>{
    console.log(state.newsPostDescription)
    switch(action.type){
        case ADD_NEWS:
            return{
                ...state,
                news: [...state.news, {id: 2, postGroops: state.newsPostGroops, 
                    postHeading: state.newsPostHeading,
                    postDescription: state.newsPostDescription,
                    postDate: state.newsPostDate
                }]
            }
        case ADD_NEWS_GROOPS:
            return{
                ...state,
                newsPostGroops: action.groops
            }
        case ADD_POST_HEADING:
            return{
                ...state,
                newsPostHeading: action.heading
            }
        case ADD_NEWS_DESCRIPTION:
            return{
                ...state,
                newsPostDescription: action.description
            }
        case ADD_NEWS_DATE:
            return{
                ...state,
                newsPostDate: action.date
            }
        default:
            return state
    }
}
export default news