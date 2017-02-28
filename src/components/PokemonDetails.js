import React from 'react'

require('./PokemonDetails.less')

class PokemonDetails extends React.Component {
  static propTypes = {
    pokemon: React.PropTypes.object
  }

  render() {
    const {
      pokemon
    } = this.props

    if (!pokemon) {
      return (
        <div><p>nothing selected</p></div>
      )
    }

    return (
      <div className="pokemon-details-container">
        <div className="row">
          <div className="pokemon-details col-lg-9 col-md-9">

            <div className="pokemon-name-container">
              <h4>
                <span className="label label-primary">Name</span>
                <span className="label label-default">{pokemon.name}</span>
              </h4>
            </div>

            <div className="pokemon-id-container">
              <h4>
                <span className="label label-primary">ID</span>
                <span className="label label-default">{pokemon.id}</span>
              </h4>
            </div>

            <div className="pokemon-type-container">
              <h4>
                <span className="label label-primary">Type(s)</span>
                {
                  pokemon.types.map(
                    type => <span key={type.type.name} className="label label-default">{type.type.name}</span>
                  )
                }
              </h4>
            </div>

            <div className="pokemon-stats-container">
              <h4>
                <span className="label label-primary">Base Stats</span>
                {
                  pokemon.stats.map(
                    stat => <span key={stat.stat.name} className="label label-default">{stat.stat.name}: {stat.base_stat}</span>
                  )
                }
              </h4>
            </div>

            <div className="pokemon-abilities-container">
              <h4>
                <span className="label label-primary">Abilities</span>
                {
                  pokemon.abilities.map(
                    ability => <span className="label label-default" key={ability.ability.name}>{ability.ability.name}</span>
                  )
                }
              </h4>
            </div>

            <div className="pokemon-moves-container">
              <h4>
                <span className="label label-primary">Moves</span>
                {
                  pokemon.moves.map(
                    move => <span className="label label-default" key={move.move.name}>{move.move.name}</span>
                  )
                }
              </h4>
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
            <img className="pokemon-image" src={pokemon.sprites.back_default} />
            <img className="pokemon-image" src={pokemon.sprites.front_shiny} />
            <img className="pokemon-image" src={pokemon.sprites.back_shiny} />
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonDetails