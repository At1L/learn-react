import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
  let textData = [
    { id : 1, text : 'Hello world!', likes: 12},
    { id : 2, text : 'My post', likes: 14},
]

let postElem = textData.map( p => <Post message = {p.text} like = {p.likes}/>)
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