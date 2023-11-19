import classes from './Navbar.module.css'
const Navbar = () => {
    return (
    <nav className={classes.nav}>
        <div className={classes.item}>
            <a href='/profile'>Profile</a>
        </div>

        <div className={classes.item} href='/news'>
            <a href='/news'>News</a>
        </div>

        <div className={classes.item} href='/dialogs'>
            <a href='/dialogs'>Messages</a>
        </div>

        <div className={classes.item}>
            <a href='/music'>Music</a>
        </div>

        <div className={classes.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>
    );
}
export default Navbar;