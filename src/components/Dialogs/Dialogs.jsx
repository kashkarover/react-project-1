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
  let dialogs = [
    { id: 1, name: 'Naruto' },
    { id: 2, name: 'Sakura' },
    { id: 3, name: 'Sasuke' },
    { id: 4, name: 'Pain' },
    { id: 5, name: 'Deidara' },
    { id: 6, name: 'Itachi' },
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hola' },
    { id: 3, message: 'Hallo' },
    { id: 4, message: 'Hello' },
    { id: 5, message: 'Konnichiwa' },
    { id: 6, message: 'Привет' },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = messages.map((m) => <Message message={m.message} />);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
