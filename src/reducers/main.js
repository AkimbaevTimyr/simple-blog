const ADD_POST_TEXT = "ADD_POST_TEXT";
const ADD_POST = "ADD_POST";
const ADD_POST_THEME = "ADD_POST_THEME";
const ADD_AUTHOR = 'ADD_AUTHOR'
const DELETE_POST = "DELETE_POST"
const initialState = {
  posts: [
    { id: 1, text: "This is firts Post", themeBody: "First Post", author: 'Author' },
    { id: 2, text: "This is second Post", themeBody: "Second Post", author: 'Author' },
  ],
  newPostText: "",
  newThemeText: "",
  newAuthorName: "",
};

const main = (state = initialState, action) => {
  const random = Math.random() * 10
  switch (action.type) {
    case ADD_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case ADD_POST:
      let body = state.newPostText;
      let theme = state.newThemeText
      let authorNames = state.newAuthorName
      return {
        ...state,
        posts: [...state.posts, { id: random, text: body, themeBody: theme, author: authorNames  }],
        newPostText: "",
        newThemeText: "",
        newAuthorName: "",
      };
    case ADD_POST_THEME:
      return {
        ...state,
        newThemeText: action.theme,
      };
    case ADD_AUTHOR:
        return{
            ...state,
            newAuthorName: action.authorName,
        }
    case DELETE_POST:
      return{
        ...state,
        posts: state.posts.filter( post => post.id != action.index)
      }
    default:
      return state;
  }
};

export default main;
