import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import PokeList from '../components/PokeList';
import { loadPokemon } from '../redux/modules/pokelist';

const mapStateToProps = state => {
  return {
    items: state.pokelist.items,
    loadingList: state.pokelist.loadingList,
    loadingDetail: state.pokelist.loadingDetail
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadList: () => dispatch(loadPokemon())
  };
};

const PokeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeList);

export default PokeListContainer;
