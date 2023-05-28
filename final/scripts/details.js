import PokemonData from "./PokemonData.mjs";
import PokemonDetails from "./PokemonDetails.mjs";
import { getParams } from "./utils.mjs";

const name = getParams("pokemon");
const data = new PokemonData("https://pokeapi.co/api/v2/");
const details = new PokemonDetails(name, data);
details.init();