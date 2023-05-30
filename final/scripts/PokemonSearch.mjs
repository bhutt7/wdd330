import { formatName } from "./utils.mjs";

export default class PokemonSearch {
    constructor(query, listElement, dataSource) {
        this.query = query;
        this.listElement = listElement;
        this.dataSource = dataSource;
    }

    async init() {
        const list = await this.dataSource.getAll();
        this.renderList(list);
    }

    renderList(list) {
        let listItem = "";
        let pokemon = {};
        const element = document.querySelector(this.listElement);
        list.results.forEach((index) => {
            pokemon = index.name;
            if (pokemon.includes(this.query)) {
                listItem = cardTemplate(pokemon);
                element.insertAdjacentHTML("beforeend", listItem);
            }
        });
    }
}

function cardTemplate(name) {
    const upperName = formatName(name);
    
    return `<li class="pokemon-card">
                <a href="./details.html?pokemon=${name}">
                    <h3>${upperName}</h3>
                </a>
            </li>`;
}