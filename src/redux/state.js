import { rerenderEntireTree } from "../render";
let state = {
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
  }

  export let addPost = (postMessage) =>{
      let newPost = {
        id : 5, 
        text : postMessage,
        likes : 0
      }

      state.profilePage.posts.push(newPost);
      rerenderEntireTree(state);
  }
  export let updateNewPostChange = (newText) =>{
      state.profilePage.newPostText = newText;
      rerenderEntireTree(state);
  }
  export default state;