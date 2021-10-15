import React from 'react';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import { loadPokedexData } from '../actions/pokedex';

export async function getStaticProps(context) {
  const result = await loadPokedexData();
  return {
    props: {
      pokemon: result.pokemon_v2_pokemon,
    },
  };
}

export default function Home({ pokemon }) {
  return (
    <React.Fragment>
      <Header />
      <Pokedex pokemon={pokemon} />
    </React.Fragment>
  );
}
