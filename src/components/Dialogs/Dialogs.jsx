import s from './Dialogs.module.css'
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Osipov Denis
                </div>
                <div className={s.dialog}>
                    Lysikov Daniil
                </div>
            </div>
            <div className={s.message}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How react going</div>
                <div className={s.message}>stayin` Alive</div>
            </div>
        </div>
    );
}

export default Dialogs;