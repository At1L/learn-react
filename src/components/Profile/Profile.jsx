import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div> 
        <div className={classes.backGroundPhoto}>
          <img src='https://sun9-22.userapi.com/impg/XyB5cSH83UeM6vQwMONItxoCz-HbqR-TRpOyxg/1esO2_Ftejc.jpg?size=1049x818&quality=96&sign=9195e711e6dc519640c2ea271b5f7dce&type=album'></img>
        </div>
        <div>
          ava + descr
        </div>
        <MyPosts/>
      </div>
    );
}
export default Profile;