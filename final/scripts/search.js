import PokemonData from "./PokemonData.mjs";
import PokemonSearch from "./PokemonSearch.mjs";
import { getParams } from "./utils.mjs";

const query = getParams("query");
const data = new PokemonData("https://pokeapi.co/api/v2/");
const search = new PokemonSearch(query, "ul", data);
search.init();