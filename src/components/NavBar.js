import React from 'react'

require('./NavBar.less')
const logo = require('../../public/img/pokedex-small.png')

class NavBar extends React.Component {
  render() {
    return (
      <div id="header" className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <i className="icon-reorder"></i>
          </button>
          <a className="navbar-brand" href="#">
            <img alt="Brand" src={logo} />
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar