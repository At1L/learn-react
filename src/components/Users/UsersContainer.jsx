import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/user-reducer";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);