import { CardContainer } from './styles';

export default function Card({ pokemon }) {
  return (
    <CardContainer>
      <div className="pokemon-image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={`pic of ${pokemon.name}`}
        />
      </div>
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-types">
        {
          pokemon.pokemon_v2_pokemontypes.map((type) =>
            <div className="type-badge" key={type.pokemon_v2_type.name}>
              {type.pokemon_v2_type.name}
            </div>
          )
        }
      </div>
      <div className="pokemon-body">
        <div className="pokemon-info">
          <div>id: {pokemon.id}</div>
          <div>height: {(pokemon.height/3.048).toFixed(2)}ft</div>
          <div>weight: {(pokemon.weight/4.536).toFixed(2)}lbs</div>
        </div>
        <div className="pokemon-abilities">
          {
            pokemon.pokemon_v2_pokemonabilities.map((ability) =>
              <div className="pokemon-ability"
                key={ability.pokemon_v2_ability.name}
                title={
                  (ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts
                  && ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts.length > 0
                  && ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect)
                  || ''
              }>
                {ability.pokemon_v2_ability.name}
              </div>
            )
          }
        </div>
      </div>
    </CardContainer>
  );
}
