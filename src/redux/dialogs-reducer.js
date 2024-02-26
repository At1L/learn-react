const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initState = {
    dialogs: [
        { id : 1, name : 'Denis'},
        { id : 2, name : 'Daniil'}
      ], 
      messages: [
        { id : 1, message : 'Hi'},
        { id : 2, message : 'How react going'},
        { id : 3, message : 'stayin` Alive'}
      ],
      newMessageBody : 'test'
}

const dialogsReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state, 
                newMessageBody: '',
                messages : [...state.messages, { id : 6, message : body}]};
        default:
            return state;
    }
}
export const sendMessageCreator = () =>  ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
({ type : UPDATE_NEW_MESSAGE_BODY, body : text });
export default dialogsReducer;