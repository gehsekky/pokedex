import React from 'react'
import PokeListItemContainer from '../containers/PokeListItemContainer';

require('./SideBar.less')

class SideBar extends React.Component {
  static propTypes = {
    items: React.PropTypes.array
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
    )
  }
}

export default SideBar