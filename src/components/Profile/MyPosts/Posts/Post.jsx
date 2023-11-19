import s from './Post.module.css'
const Post = (props) => {
     return (
        <div className= {s.item}>
        <div>
            <img src = 'https://sun9-43.userapi.com/impg/wd60NV289rZiJEaJ1bfltbAD-RZv3bjEYUWdOw/3KYhnKWn6ks.jpg?size=320x363&quality=95&sign=154c919c01599d9f154d78bed0c74b5e&c_uniq_tag=rgKZLUQB08bkmf72ZVeEjQIlNJpivG0yjOqbwSr9b0Y&type=album'/>
            {props.message}
         </div>
        <div>likes: {props.like}</div>
        </div>
     );
}
export default Post;