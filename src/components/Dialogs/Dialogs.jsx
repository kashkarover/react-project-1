import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessage = React.createRef();
  let addMessage = () => {
    let message = newMessage.current.value;
    alert(message);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messages}>{messagesElement}</div>
        <textarea ref={newMessage}></textarea>
        <div>
          <button onClick={addMessage}>Отправить сообщение</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
