import 'whatwg-fetch'

export const POKELIST_SET_LOADING_LIST = 'POKELIST_SET_LOADING_LIST';
export const POKELIST_SET_LOADING_DETAIL = 'POKELIST_SET_LOADING_DETAIL';
export const POKELIST_SET_POKEMON = 'POKELIST_SET_POKEMON';
export const POKELIST_SET_LIST = 'POKELIST_SET_LIST';

const initialState = {
  items: [],
  pokemon: null,
  loadingList: false,
  loadingDetail: false
};

function setLoadingList(loadingList) {
  return {
    type: POKELIST_SET_LOADING_LIST,
    payload: {
      loadingList
    }
  }
}

function setLoadingDetail(loadingDetail) {
  return {
    type: POKELIST_SET_LOADING_DETAIL,
    payload: {
      loadingDetail
    }
  }
}

function setPokemon(pokemon) {
  return {
    type: POKELIST_SET_POKEMON,
    payload: {
      pokemon
    }
  }
}

function setList(items) {
  return {
    type: POKELIST_SET_LIST,
    payload: {
      items: items.slice()
    }
  }
}

const handlers = {
  [POKELIST_SET_LOADING_LIST]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [POKELIST_SET_LOADING_DETAIL]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [POKELIST_SET_POKEMON]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [POKELIST_SET_LIST]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
}

export default function pokelist(state = initialState, action) {
  switch (action.type) {
    case POKELIST_SET_LOADING_LIST:
    case POKELIST_SET_LOADING_DETAIL:
    case POKELIST_SET_POKEMON:
    case POKELIST_SET_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export function getPokemonData(url) {
  return (dispatch) => {
    dispatch(setLoadingDetail(true))

    return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(error.response);
      }

      return response.json();
    })
    .then(response => {
      dispatch(setPokemon(response))
      dispatch(setLoadingDetail(false))
    })
    .catch(err => {
      console.error(err);
      throw err;
    })
  }
}

export function loadPokemon() {
  return dispatch => {
    dispatch(setLoadingList(true))

    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
    .then(response => {
      if (response.status !== 200) {
        throw new Error(error.response)
      }

      return response.json()
    })
    .then(parsed => {
      dispatch(setList(parsed.results))
      dispatch(setLoadingList(false))
    })
    .catch(err => {
      console.error(err.stack)
    });
  };
}