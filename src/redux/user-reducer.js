const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
let initState = {
    users: [
        { id : 1, photoURL: 'https://sun9-41.userapi.com/impg/LQIHsOvjkvMri2w-doq1PvoIQRUrjihsXgHk3Q/tLldmPegd_Y.jpg?size=181x214&quality=96&sign=0a067f8b60136eb2d439cb2a612e4fee&type=album',
         followed: true, fullName : 'Denis', status: 'krutoi chel', location:{city:'Soyuznaya 144', country:'Bragino'}},
        { id : 2, photoURL: 'https://sun9-65.userapi.com/impg/rHyfYgXOtqn0v7QBWycyBmCAcLSfYPGalr5E3Q/9AZHRAJIMHE.jpg?size=833x1080&quality=95&sign=74ab3c3c21b1f59e941c2bc223a92c65&type=album',
         followed: true, fullName : 'Daniil', status: 'toje Denis', location:{city:'Soyuznaya 144', country:'Bragino'}},
        { id : 3, photoURL: 'https://sun9-28.userapi.com/impg/H_Uu2ai-43Wf6QHeSZEgPYzWkZYzIrd_eo51uQ/IeB3bpT0iXM.jpg?size=828x728&quality=95&sign=e4c36ce90fae7949af1b926b31771ddb&type=album',
         followed: false, fullName : 'Maria', status: 'Ferrari fan', location:{city:'Soyuznaya 144', country:'Bragino'}}
      ]
}
const userReducer = (state = initState, action) => {
    switch(action.type){
        case FOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u
                })}
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })}
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}
export const followAC = (userID) =>  ({type : FOLLOW, userID})
export const unfollowAC = (userID) =>  ({type : UNFOLLOW, userID})
export const setUsersAC = (users) =>  ({type : SET_USERS,  users})
export default userReducer;