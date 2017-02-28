import { modeled, formReducer } from 'react-redux-form';

export const SEARCH_QUERYING = 'SEARCH_QUERYING';
export const SEARCH_QUERIED = 'SEARCH_QUERIED';

function searchQuerying(query) {
  return {
    type: SEARCH_QUERYING,
    query
  };
}

function searchQueried(results) {
  return {
    type: SEARCH_QUERIED,
    results
  };
}

const initialState = {
  query: '',
  results: [],
  loading: false
}

export function searchFindPokemon(query) {
  return dispatch => {
    return Promise.resolve()
    .then(() => {
      dispatch(searchQuerying(query));
    })
    .then(() => {
      return []
    })
    .then(results => {
      dispatch(searchQueried(results));
    })
    .catch(err => {
      console.error(err.stack);
      throw err;
    })
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_QUERYING:
      return {
        ...state,
        query
      };
    case SEARCH_QUERIED:
      return {
        ...state,
        results
      };
    default:
      return state;
  }
}

export const search = modeled(reducer, 'search');
export const searchForm = formReducer('search');

