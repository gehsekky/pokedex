import React from 'react';

require('./NavBar.less');

const logo = require('../../public/img/pokedex-small.png');

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
