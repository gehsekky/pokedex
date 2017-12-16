'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('./App.less')

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
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
