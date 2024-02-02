import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElem = props.dialogs.map((dialog) => <DialogItem name= {dialog.name}  id= {dialog.id} />)

    
    let messagesElem = props.messages.map((message) => <Message message= {message.message} />)

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