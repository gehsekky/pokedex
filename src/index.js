import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import PokeListContainer from './containers/PokeListContainer';
import SearchContainer from './containers/SearchContainer';
import reducer from './redux/modules';

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PokeListContainer} />
        <Route path="search" component={SearchContainer} />
        <Route path="pokelist" component={PokeListContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'));
