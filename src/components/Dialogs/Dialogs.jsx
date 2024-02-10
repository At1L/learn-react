import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElem = state.dialogs.map((dialog) => <DialogItem name= {dialog.name}  id= {dialog.id} />)
    let messagesElem = state.messages.map((message) => <Message message= {message.message} />)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElem}
            </div>
            <div className={s.message}>
                <div>{messagesElem}</div>
                <div>
                    <div><textarea value = {newMessageBody}
                        onChange={ onNewMessageChange}
                        placeholder='enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;