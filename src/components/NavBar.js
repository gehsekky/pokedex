import React from 'react';
import logo from '../../public/img/pokedex-small.png';

require('./NavBar.less');

class NavBar extends React.Component {
  render() {
    return (
      <div id="header" className="navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          <img alt="pokedex" src={logo} />
        </a>
      </div>
    );
  }
}

export default NavBar;
