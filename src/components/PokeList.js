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
      <div>
        <NavBar />
        <div className="pokelist-container">
          <div className="row">
            <div className="maximized">
              <div className="pokelist-items-container col-lg-3 col-md-3 fixed">
              {
                loadingList ? <LoadingMessage /> : <SideBar items={items} />
              }
              </div>
              <div className="pokelist-item-container col-lg-9 col-md-9 pull-right">
                <div className="content">
                {
                  loadingDetail ? <LoadingMessage /> : <PokemonDetailsContainer />
                }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PokeList;