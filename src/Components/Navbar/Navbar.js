import React, {useState} from 'react';

import classes from './Navbar.module.css';
import NavLink from './NavLink.js';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  }

  const Menu = <div className={classes.Menu}>
                <span className={classes.Links}>
                  <NavLink linkName={"Link1"} linkURL={"#"}/>
                  <NavLink linkName={"Link2"} linkURL={"#"}/>
                  <NavLink linkName={"Link3"} linkURL={"#"}/>
                  <NavLink linkName={"Link4"} linkURL={"#"}/>
                </span>
              </div>

  const Logo = <span className={classes.Logo}>
                <NavLink linkName={"Logo"} linkURL={"#"}/>
              </span>

  const MenuBtn = <div className={classes.MenuBtn} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

  return (
    <div className={classes.Navbar}>
      <div className={classes.MenuControls}>
        {Logo}
        {MenuBtn}
      </div>
      {showMenu?Menu:null}
    </div>
  )
}

export default Navbar;