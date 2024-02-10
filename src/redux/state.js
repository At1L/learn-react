import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
  _state : {
    profilePage:{
        posts: [
          { id : 1, text : 'Hello world!', likes: 12},
          { id : 2, text : 'My post', likes: 14}
        ],
        newPostText: 'test'
      },
    dialogsPage:{
        dialogs: [
          { id : 1, name : 'Denis'},
          { id : 2, name : 'Daniil'}
        ], 
        messages: [
          { id : 1, message : 'Hi'},
          { id : 2, message : 'How react going'},
          { id : 3, message : 'stayin` Alive'}
        ],
        newMessageBody : 'test'
      },
      sidebar:{}
    },
  _rerenderEntireTree(){},
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._rerenderEntireTree = observer;
  },

  addPost(){
      let newPost = {
        id : 5, 
        text : this._state.profilePage.newPostText,
        likes : 0
      }

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state); 
    },
  updateNewPostChange(newText){
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
    },

    dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._rerenderEntireTree(this._state);
    }
}
export default store;