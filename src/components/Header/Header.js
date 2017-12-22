import React from 'react';

require('./Header.less');

const image = require('../../../public/img/pokedex.png');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={image} />
      </div>
    );
  }
}

export default Header;