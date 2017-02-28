import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./PokeListItem.less')

class PokeListItem extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    selectedPokemon: PropTypes.object
  }

  constructor() {
    super()

    this.onItemClick.bind(this)
  }

  onItemClick(e, url) {
    const {
      handleClick
    } = this.props

    this.setState({
      selected: true
    })

    // execute connected logic in container
    handleClick(url)
  }

  render() {
    const {
      handleClick,
      item,
      selectedPokemon
    } = this.props;

    let className = classnames({
      selected: selectedPokemon && item.name === selectedPokemon.name
    })

    return (
      <div className="pokelist-item">
        <div className="pokelist-item-name" className={className}>
          <a onClick={e => this.onItemClick(e, item.url)}>{item.name}</a>
        </div>
      </div>
    );
  }
}

export default PokeListItem;