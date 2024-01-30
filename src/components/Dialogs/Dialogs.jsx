import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) =>{
    return(
        <div className={s.dialog}>
                    <NavLink to={'/dialogs?' + props.id}>{props.name}</NavLink>
                </div>
    );
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    ); 
}
const Dialogs = (props) => {
    let dialogsData = [
        { id : 1, name : 'Denis'},
        { id : 2, name : 'Daniil'}
    ]

    let dialogsElem = dialogsData.map((dialog) => <DialogItem name= {dialog.name}  id= {dialog.id} />)

    let messagesData = [
        { id : 1, message : 'Hi'},
        { id : 2, message : 'How react going'},
        { id : 3, message : 'stayin` Alive'}
    ]
    
    let messagesElem = messagesData.map((message) => <Message message= {message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElem}
            </div>
            <div className={s.message}>
                {messagesElem}
            </div>
        </div>
    );
}

export default Dialogs;