import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.wallpaper}>
        <img
          alt='wallpaper'
          src='https://vsegda-pomnim.com/uploads/posts/2022-04/1650892091_4-vsegda-pomnim-com-p-dolomitovie-gori-foto-4.jpg'
        ></img>
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
