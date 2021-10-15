import { v4 as uuidv4 } from 'uuid';

import Card from '../Card';
import { PokedexContainer } from './styles';

export default function Pokedex({ pokemon }) {
  return (
    <PokedexContainer>
      {
        pokemon && pokemon.map((p) => <Card key={uuidv4()} pokemon={p} />)
      }
    </PokedexContainer>
  );
}
