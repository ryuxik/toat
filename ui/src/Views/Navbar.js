import React from 'react';
import {
  Link
} from 'react-router-dom';

const NAV_SECTIONS = {
  ENTRIES : 'entries',
  PROFILE : 'profile',
  FRIENDS : 'friends',
  HOME : 'home'
}

const Navbar = props => {
  let entriesClasses = 'nav-section';
  let profileClasses = 'nav-section';
  let friendClasses = 'nav-section';

  switch (props.activeSection) {
    case NAV_SECTIONS.ENTRIES:
      entriesClasses += ' active-section';
      break;
    case NAV_SECTIONS.FRIENDS:
      friendClasses += ' active-section';
      break;
    case NAV_SECTIONS.PROFILE:
      profileClasses += ' active-section';
      break;
    default:
      break;
  }

  const render_nav = () => {
    return (
      <nav className="main-nav">
        <div id="nav-collapse" onClick={props.onToggleNavbar}>x</div>
        <Link
          className="nav-title"
          to="/"
          onClick={() => props.onSectionClick(NAV_SECTIONS.HOME)}>Toat</Link>
        <div className="nav-sections-container">
          <Link
            className={entriesClasses}
            to="/entries"
            onClick={() => props.onSectionClick(NAV_SECTIONS.ENTRIES)}>my entries</Link>
          <Link
            className={profileClasses}
            to="/profile"
            onClick={() => props.onSectionClick(NAV_SECTIONS.PROFILE)}>my profile</Link>
          <Link
            className={friendClasses}
            to="/friends"
            onClick={() => props.onSectionClick(NAV_SECTIONS.FRIENDS)}>my friends</Link>
        </div>
      </nav>
      );
  }

  const render_hamburger = () => {
    return(
      <div
        onClick={props.onToggleNavbar}
        className='hamburger'>&#9776;</div>
    );
  }

  return (props.open ? render_nav() : render_hamburger());
}

export {
  Navbar,
  NAV_SECTIONS,
}