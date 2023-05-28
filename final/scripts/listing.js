import PokemonData from "./PokemonData.mjs";
import PokemonList from "./PokemonList.mjs";
import { getParams } from "./utils.mjs";

const page = parseInt(getParams("page"));
const data = new PokemonData("https://pokeapi.co/api/v2/");
const list = new PokemonList(data, "ul", page);
list.init();

document.querySelector("main")
.insertAdjacentHTML("beforeend",
`<a href="" class="new-page previous">Previous</a>
<a href="" class="new-page next">Next</a>`);

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
previous.setAttribute("href", `listing.html?page=${page-1}`);
next.setAttribute("href", `listing.html?page=${page+1}`);

if (page == 1) {
    previous.classList.add("hide");
}
if (page == 43) {
    next.classList.add("hide");
}