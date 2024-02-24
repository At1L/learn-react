import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';


const MyPosts = (props) => {
  
  let postElem = props.posts.map( p => <Post message = {p.text} like = {p.likes}/>)

  let newPostElement = React.createRef();

  let addPost = () =>{
    props.addPost();
  }
  
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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