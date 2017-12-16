import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetailsContainer from '../containers/PokemonDetailsContainer';
import NavBar from './NavBar';
import SideBar from './SideBar';

require('./PokeList.less')

class PokeList extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    loading: PropTypes.bool,
    loadList: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {
      items,
      loadList
    } = this.props;

    if (items.length === 0) {
      loadList();
    }
  }

  render() {
    const {
      items,
      loading,
      onRefreshClick
    } = this.props;

    return (
      <div>
        <NavBar />
        <div className="pokelist-container">
          <div className="row">
            <div className="pokelist-items-container col-lg-3 col-md-3 fixed">
              <SideBar items={items} />
            </div>
            <div className="pokelist-item-container col-lg-9 col-md-9 pull-right">
              <div className="content">
                <PokemonDetailsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeList;