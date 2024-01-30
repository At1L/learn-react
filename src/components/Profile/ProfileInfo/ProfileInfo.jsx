import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div> 
        <div className={classes.backGroundPhoto}>
          <img src='https://sun9-22.userapi.com/impg/XyB5cSH83UeM6vQwMONItxoCz-HbqR-TRpOyxg/1esO2_Ftejc.jpg?size=1049x818&quality=96&sign=9195e711e6dc519640c2ea271b5f7dce&type=album'></img>
        </div>
        <div className={classes.descrBlock}>
          ava + descr
        </div>
      </div>
    );
}
export default ProfileInfo;