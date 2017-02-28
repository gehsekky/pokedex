import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import Search from '../components/Search';
import { searchFindPokemon } from '../redux/modules/search';

const mapStateToProps = state => {
  return {
    results: state.search.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchPokemon: () => {
      dispatch(searchFindPokemon());
    },
    handleSubmit: (form) => {
      console.log('form', form);
    }
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
