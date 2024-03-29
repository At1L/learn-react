const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initState = {
    posts: [
        { id : 1, text : 'Hello world!', likes: 12},
        { id : 2, text : 'My post', likes: 14}
      ],
      newPostText: 'test'
}
const profileReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id : 5, 
                text : state.newPostText,
                likes : 0
            }
            return {...state,
            posts: [...state.posts, newPost], 
            newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state,
                newPostText: action.newText
                }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () =>  ({type : ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
({ type : UPDATE_NEW_POST_TEXT, newText : text });
export default profileReducer;