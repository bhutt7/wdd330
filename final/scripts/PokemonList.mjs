import { formatName } from "./utils.mjs";

export default class PokemonList {
    constructor(dataSource, listElement, page) {
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.page = page;
    }

    async init() {
        const list = await this.dataSource.getList(this.page);
        this.renderList(list);
    }

    renderList(list) {
        let listItem = "";
        let pokemon = {};
        const element = document.querySelector(this.listElement);
        list.results.forEach((index) => {
            pokemon = index.name;
            listItem = cardTemplate(pokemon);
            element.insertAdjacentHTML("beforeend", listItem);
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