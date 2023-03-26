import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: "It's my first post!", likesCount: 12 },
    { id: 3, message: 'My name is Ravil', likesCount: 7 },
    { id: 4, message: 'I love React!', likesCount: 45 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
