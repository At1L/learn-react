import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

  let postElem = props.posts.map( p => <Post message = {p.text} like = {p.likes}/>)

  let newPostElement = React.createRef();

  let addPost = () =>{
    props.dispatch(addPostActionCreator());
  }
  
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }
    return (
        <div className = {s.postBlock}>
          My posts
          <div>
            <div>
              <textarea onChange={onPostChange} ref = {newPostElement} value = {props.newPostText}/>
            </div>
            <div>
               <button onClick={ addPost }>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {postElem}
          </div>
        </div>
    );
}

export default MyPosts;