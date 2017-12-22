import React from 'react';
import PropTypes from 'prop-types';
import PokeListItemContainer from '../containers/PokeListItemContainer';

require('./SideBar.less');

class SideBar extends React.Component {
  static propTypes = {
    items: PropTypes.array
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.items && this.props.items.length > 0) return false;
    return true;
  }

  render() {
    const {
      items
    } = this.props;

    return (
      <div className="sidebar">
      {
        items
        ? items.map(item => {
          return (
            <PokeListItemContainer key={item.name} item={item} />
          )
        })
        : <p>There are no pokemon to display</p>
      }
      </div>
    );
  }
}

export default SideBar;