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
        ]}
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
      if(action.type === 'ADD-POST'){
        let newPost = {
          id : 5, 
          text : this._state.profilePage.newPostText,
          likes : 0
        }
  
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state); 
      } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._rerenderEntireTree(this._state);
      }
    }
}

  export default store;