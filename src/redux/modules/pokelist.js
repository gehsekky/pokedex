import 'whatwg-fetch'

export const POKELIST_SET_LOADING = 'POKELIST_SET_LOADING';
export const POKELIST_SET_POKEMON = 'POKELIST_SET_POKEMON';
export const POKELIST_SET_LIST = 'POKELIST_SET_LIST';

const initialState = {
  items: [],
  pokemon: null,
  loading: false
};

function setLoading(loading) {
  return {
    type: POKELIST_SET_LOADING,
    payload: {
      loading
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
      items
    }
  }
}

export function getPokemonData(url) {
  return (dispatch) => {
    dispatch(setLoading(true))

    return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(error.response);
      }

      return response.json();
    })
    .then(response => {
      dispatch(setPokemon(response))
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.error(err);
      throw err;
    })
  }
}

export function loadPokemon() {
  return dispatch => {
    dispatch(setLoading(true))

    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
    .then(response => {
      if (response.status !== 200) {
        throw new Error(error.response)
      }

      return response.json()
    })
    .then(parsed => {
      dispatch(setList(parsed.results))
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.error(err.stack)
    });
  };
}

export default function pokelist(state = initialState, action) {
  switch (action.type) {
    case POKELIST_SET_LOADING:
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