import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {


let postElem = props.posts.map( p => <Post message = {p.text} like = {p.likes}/>)
    return (
        <div className = {s.postBlock}>
          My posts
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {postElem}
          </div>
        </div>
    );
}

export default MyPosts;