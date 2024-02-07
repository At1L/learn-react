import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElem = props.state.dialogs.map((dialog) => <DialogItem name= {dialog.name}  id= {dialog.id} />)
    let messagesElem = props.state.messages.map((message) => <Message message= {message.message} />)
    let newMessageElement = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElem}
            </div>
            <div className={s.message}>
                {messagesElem}
                <textarea ref = {newMessageElement}></textarea>
                <button onClick={newMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;