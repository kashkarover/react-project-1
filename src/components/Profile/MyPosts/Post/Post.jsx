import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://img3.goodfon.com/original/1152x864/e/31/novaya-kaledoniya-tihiy-okean.jpg'></img>
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
