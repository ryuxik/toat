import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import {Navbar, NAV_SECTIONS} from './Views/Navbar';
import Home from './Views/Home/Home';
import Entries from './Views/Entries/Entries';
import Friends from './Views/Friends/Friends';
import Profile from './Views/Profile/Profile';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection : NAV_SECTIONS.HOME,
      showNav : false,
      userID: 'dummyData'
    };
  }

  onToggleNavbar = () => {
    this.setState((state) => {
      return {showNav : !state.showNav}
    })
  }

  handleSectionClick = (sectionType) => {
    this.setState({
      activeSection: sectionType
    });
  }

  render() {
    return (
      <Router>
        <Navbar 
          activeSection={this.state.activeSection}
          open={this.state.showNav}
          onToggleNavbar={this.onToggleNavbar}
          onSectionClick={this.handleSectionClick}/>
        <Route
          exact path="/"
          render={() => <Home userID={this.state.userID}/>}/>
        <Route 
          exact path="/entries"
          component={Entries}/>
        <Route
          exact path="/profile"
          component={Profile}/>
        <Route
          exact path="/friends"
          component={Friends}/>
      </Router>
    );
  }
}

export default AppRouter;
