const ADD_POST_TEXT = "ADD_POST_TEXT"
const ADD_POST = "ADD_POST"
const ADD_POST_THEME ="ADD_POST_THEME"
const ADD_AUTHOR = 'ADD_AUTHOR'
const DELETE_POST = "DELETE_POST"

const ADD_NEWS_GROOPS = "ADD_NEWS_GROOPS"
const ADD_POST_HEADING = "ADD_POST_HEADING"
const ADD_NEWS_DESCRIPTION = "ADD_NEWS_DESCRIPTION"
const ADD_NEWS_DATE = "ADD_NEWS_DATE"
const ADD_NEWS = "ADD_NEWS"

export const addPostText = (text) =>({type: ADD_POST_TEXT, text})
export const addPost = () =>({type: ADD_POST})
export const addPostTheme = (theme) => ({type: ADD_POST_THEME, theme})
export const addAuthor  = (authorName) =>({type: ADD_AUTHOR, authorName})
export const deletePost = (index) =>({type: DELETE_POST, index})

export const addNewsGroops = (groops) => ({type: ADD_NEWS_GROOPS, groops})
export const addNewsDescription = (description) => ({type: ADD_NEWS_DESCRIPTION, description})
export const addNewsHeading = ( heading ) =>({ type: ADD_POST_HEADING, heading})
export const addNewsDate = (date) => ({type: ADD_NEWS_DATE, date})
export const addNews = () =>({type: ADD_NEWS})