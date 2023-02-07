import axios from "axios";

import React from "react";

export const getPokemon = async () => {
  try {
    const res = await axios.get(" https://pokeapi.co/api/v2/pokemon?limit=151");
    const result = res.data.results;
    return result;
  } catch (err) {
    return console.log(err);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const res = await axios.get(pokemon.url);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

// export const getPokemonDetails = (pokemon) => {
//   return axios
//     .get(pokemon.url)
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };
