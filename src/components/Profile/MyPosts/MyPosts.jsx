import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
          My posts
          <div>
            New posts
          </div>
          <div className={s.posts}>
            <Post message='Hello world!' like='52'/>
            <Post message='My post' like = '25'/>
            <Post/>
          </div>
        </div>
    );
}

export default MyPosts;