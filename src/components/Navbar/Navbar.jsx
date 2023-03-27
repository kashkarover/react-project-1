import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  let FriendsOnlineElements = props.state.friendsOnline.map((f) => (
    <div className={classes.friends_online}>{f.name}</div>
  ));
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to='/profile'
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/dialogs'
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/news'
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/music'
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/settings'
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.friends}>
        <h2>Friends</h2>
        {FriendsOnlineElements}
      </div>
    </nav>
  );
};

export default Navbar;
