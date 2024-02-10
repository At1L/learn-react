const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
      }
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
      if(action.type === ADD_POST){
        let newPost = {
          id : 5, 
          text : this._state.profilePage.newPostText,
          likes : 0
        }
  
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state); 
      }
       else if(action.type === UPDATE_NEW_POST_TEXT){
        this._state.profilePage.newPostText = action.newText;
        this._rerenderEntireTree(this._state);
      }
      else if(action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.dialogsPage.newMessageBody = action.body;
        this._rerenderEntireTree(this._state);
      }
      else if(action.type === SEND_MESSAGE){
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({ id : 6, message : body});
        this._rerenderEntireTree(this._state);
      }
    }
}

export const addPostActionCreator = () =>  ({type : ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
({ type : UPDATE_NEW_POST_TEXT, newText : text });
export const sendMessageCreator = () =>  ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
({ type : UPDATE_NEW_MESSAGE_BODY, body : text });
export default store;