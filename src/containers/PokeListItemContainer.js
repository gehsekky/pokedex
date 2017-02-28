import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import PokeListItem from '../components/PokeListItem';
import { getPokemonData } from '../redux/modules/pokelist';

const mapStateToProps = state => {
  return {
    selectedPokemon: state.pokelist.pokemon
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (url) => {
      dispatch(getPokemonData(url));
    }
  };
};

const PokeListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeListItem);

export default PokeListItemContainer;
