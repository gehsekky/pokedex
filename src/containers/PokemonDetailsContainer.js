import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import PokemonDetails from '../components/PokemonDetails';
import { loadPokemon } from '../redux/modules/pokelist';

const mapStateToProps = state => {
  return {
    pokemon: state.pokelist.pokemon
  }
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const PokemonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails);

export default PokemonDetailsContainer;
