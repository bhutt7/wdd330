import PokemonData from "./PokemonData.mjs";
import PokemonDetails from "./PokemonDetails.mjs";
import { getParams } from "./utils.mjs"

const name = getParams("pokemon");
let data = new PokemonData("https://pokeapi.co/api/v2/");
let deets = new PokemonDetails(name, data);
deets.init();
