import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Views/Home/Home';
import Entries from './Views/Entries/Entries';
import Friends from './Views/Friends/Friends';
import Profile from './Views/Profile/Profile';

import './App.css';

const NAVSECTIONS = {
  ENTRIES : 'entries',
  PROFILE : 'profile',
  FRIENDS : 'friends',
  HOME : 'home'
}

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection : NAVSECTIONS.HOME
    };
  }

  handleSectionClick(sectionType) {
    this.setState({
      activeSection: sectionType
    });
  }

  render() {
    let entriesClasses = 'nav-section';
    let profileClasses = 'nav-section';
    let friendClasses = 'nav-section';
    switch (this.state.activeSection) {
      case NAVSECTIONS.ENTRIES:
        entriesClasses += ' active-section';
        break;
      case NAVSECTIONS.FRIENDS:
        friendClasses += ' active-section';
        break;
      case NAVSECTIONS.PROFILE:
        profileClasses += ' active-section';
        break;
      default:
        break;
    }
    return (
      <Router>
        <div>
          <nav className="main-nav">
            <Link
              className="nav-title"
              to="/"
              onClick={() => this.handleSectionClick(NAVSECTIONS.HOME)}>Toat</Link>
            <div className="nav-sections-container">
              <Link
                className={entriesClasses}
                to="/entries"
                onClick={() => this.handleSectionClick(NAVSECTIONS.ENTRIES)}>my entries</Link>
              <Link
                className={profileClasses}
                to="/profile"
                onClick={() => this.handleSectionClick(NAVSECTIONS.PROFILE)}>my profile</Link>
              <Link
                className={friendClasses}
                to="/friends"
                onClick={() => this.handleSectionClick(NAVSECTIONS.FRIENDS)}>my friends</Link>
            </div>
          </nav>
        </div>

        <Route path="/" exact component={Home}/>
        <Route path="/entries" exact component={Entries}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/friends" exact component={Friends}/>
      </Router>
    );
  }
}

export default AppRouter;
