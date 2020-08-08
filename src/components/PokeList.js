import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetailsContainer from '../containers/PokemonDetailsContainer';
import NavBar from './NavBar';
import SideBar from './SideBar';
import LoadingMessage from './LoadingMessage/LoadingMessage';

require('./PokeList.less')

class PokeList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    loadingList: PropTypes.bool.isRequired,
    loadingDetail: PropTypes.bool.isRequired,
    loadList: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      items,
      loadList
    } = this.props;

    if (items.length === 0) {
      return loadList()
    }
  }

  render() {
    const {
      items,
      loadingList,
      loadingDetail,
      onRefreshClick
    } = this.props;

    return (
      <div className="fullheightwidth">
        <NavBar />
        <div className="row pokelist-container">
          <div className="col-3 pokelist-items-container position-fixed">
          {
            loadingList ? <LoadingMessage /> : <SideBar items={items} />
          }
          </div>
          <div className="col-9 pokelist-item-container offset-3">
          {
            loadingDetail ? <LoadingMessage /> : <PokemonDetailsContainer />
          }
          </div>
        </div>
      </div>
    );
  }
}

export default PokeList;
