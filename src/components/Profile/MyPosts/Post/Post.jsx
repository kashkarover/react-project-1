import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        alt='profile small img'
        src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614586263_33-p-deidara-na-belom-fone-35.jpg'
      ></img>
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
