import React from 'react'

import classes from './NavLink.module.css';

const NavLink = ({linkName, linkURL}) => {
  return (
    <a className={classes.NavLink} href="linkURL">{linkName}</a>
  )
}

export default NavLink;