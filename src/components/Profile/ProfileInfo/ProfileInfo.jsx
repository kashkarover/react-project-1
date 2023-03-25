import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.wallpaper}>
        <img src='https://img3.goodfon.com/original/1152x864/e/31/novaya-kaledoniya-tihiy-okean.jpg'></img>
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
