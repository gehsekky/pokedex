import React from 'react';
import PropTypes from 'prop-types';

require('./PokemonDetails.less');

class PokemonDetails extends React.Component {
  static propTypes = {
    pokemon: PropTypes.object
  };

  render() {
    const {
      pokemon
    } = this.props;

    if (!pokemon) {
      return (
        <div><p>nothing selected</p></div>
      );
    }

    return (
      <div className="pokemon-details-container">
        <div className="row">
          <div className="pokemon-details col-lg-9 col-md-9">

            <div className="pokemon-name-container">
              <ul>
                <li>
                  <h1>{pokemon.name}</h1>
                </li>
                <li>
                  <h5>
                    <span className="">ID:&nbsp;</span>
                    <span className="">{pokemon.id}</span>
                  </h5>
                </li>
                <li>
                {
                  pokemon.types.map(
                    type => <span key={type.type.name} className="label label-info">{type.type.name}</span>
                  )
                }
                </li>
              </ul>
            </div>

            <div className="pokemon-stats-container">
              <h4 className="details-header">Base Stats</h4>
              {
                pokemon.stats.map(
                  stat => <span key={stat.stat.name} className="label label-default">{stat.stat.name}: {stat.base_stat}</span>
                )
              }
            </div>

            <div className="pokemon-abilities-container">
              <h4 className="details-header">Abilities</h4>
              {
                pokemon.abilities.map(
                  ability => <span className="label label-default" key={ability.ability.name}>{ability.ability.name}</span>
                )
              }
            </div>

            <div className="pokemon-moves-container">
              <h4 className="details-header">Moves</h4>
              {
                pokemon.moves.map(
                  move => <span className="label label-default" key={move.move.name}>{move.move.name}</span>
                )
              }
            </div>

            <div className="pokemon-weight-container">
              <h4>
                <span className="label label-primary">Weight</span>
                <span className="label label-default">{pokemon.weight}</span>
              </h4>
            </div>

            <div className="pokemon-height-container">
              <h4>
                <span className="label label-primary">Height</span>
                <span className="label label-default">{pokemon.height}</span>
              </h4>
            </div>

            <div className="pokemon-xp-container">
              <h4>
                <span className="label label-primary">Base Experience</span>
                <span className="label label-default">{pokemon.base_experience}</span>
              </h4>
            </div>

          </div>
          <div className="pokemon-image-container col-lg-3 col-md-3">
            <img className="pokemon-image" src={pokemon.sprites.front_default} />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;