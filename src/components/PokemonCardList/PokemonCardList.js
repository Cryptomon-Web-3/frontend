import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const pokemons = [
    {
        name: 'Pikachu',
        type: 'electric',
        abilities: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        skills: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        imageUrl: '/pokemons/pikachu.png',
        bgColor: '#f9ca24',
    },
    {
        name: 'Pikachu',
        type: 'electric',
        abilities: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        skills: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        imageUrl: '/pokemons/pikachu.png',
        bgColor: '#fdcb6e',
    },
    {
        name: 'Pikachu',
        type: 'electric',
        abilities: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        skills: ['Fireball', 'Fireblast', 'Quick Attack', 'Heat Blast', 'Cannon Bolt'],
        imageUrl: '/pokemons/pikachu.png',
        bgColor: '#fdcb6e',
    },
]

const PokemonCardList = () => {
  return(
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {pokemons.map((poke, index) => (
              <PokemonCard key={index} pokemonData={poke}/>
          ))}
         </ul>
  )
};

export default PokemonCardList;
