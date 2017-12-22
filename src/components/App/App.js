'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PokeListContainer from '../../containers/PokeListContainer';
import SearchContainer from '../../containers/SearchContainer';

require('./App.less');

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div id="page" className="container-fluid">
        { this.props.children }

        <Route path="/" component={PokeListContainer} />
        <Route path="search" component={SearchContainer} />
        <Route path="pokelist" component={PokeListContainer} />
      </div>
    );
  }
}

export default App;
