import { gql } from '@apollo/client';
import client from '../../apollo-client';

export const loadPokedexData = async () => {
  const { data }  = await client.query({
    query: gql`
      query pokedexQuery {
        pokemon_v2_pokemon {
          height
          id
          name
          weight
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
              pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                effect
              }
            }
          }
        }
      }
    `,
  });

  return data;
};
