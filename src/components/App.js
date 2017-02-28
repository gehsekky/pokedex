'use strict';

import React from 'react';

require('./App.less')

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div id="page" className="container-fluid">
        { this.props.children }
      </div>
    );
  }
}

export default App;
