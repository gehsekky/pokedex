import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import pokelist from './pokelist';
import { search, searchForm } from './search';

export default combineReducers({
  pokelist,
  search,
  searchForm
})