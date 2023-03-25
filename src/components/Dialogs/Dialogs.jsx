import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <DialogItem name='Naruto' id='1' />
        <DialogItem name='Sakura' id='2' />
        <DialogItem name='Sasuke' id='3' />
        <DialogItem name='Pain' id='4' />
        <DialogItem name='Deidara' id='5' />
        <DialogItem name='Itachi' id='6' />
      </div>
      <div className={classes.messages}>
        <Message message='Hi' />
        <Message message='How are you?' />
        <Message message='saddasdsaddasd' />
      </div>
    </div>
  );
};

export default Dialogs;
