import { hasTwoTypes, formatName } from "./utils.mjs";

export default class TypeMatchup {
    constructor(dataSource, name) {
        this.dataSource = dataSource;
        this.name = name;
        this.pokemon = {};
        this.first = {};
        this.second = {};
    }

    async init() {
        this.pokemon = await this.dataSource.getData(this.name);
        this.first = await this.dataSource.getDamage(this.pokemon.types[0].type.name);
        if (hasTwoTypes(this.pokemon)) {
            this.second = await this.dataSource.getDamage(this.pokemon.types[1].type.name);
        }
        this.renderMatchup(".matchup");
    }

    renderMatchup(selector) {
        const element = document.querySelector(selector);
        let strongList = strong(this.first, this.second);
        let weakList = weak(this.first, this.second);
        const dupes = findDuplicates(strongList, weakList);
        strongList = strongList.filter((type) => !dupes.includes(type));
        weakList = weakList.filter((type) => !dupes.includes(type));

        element.insertAdjacentHTML("afterbegin",
        `<li><b>Strong against:</b><li>${strongList.join(", ")}</li>
        <li><b>Weak against:</b><li>${weakList.join(", ")}</li>`);
    }
}

function strong(typeOne, typeTwo) {
    let strong = [];
    typeOne.double_damage_to.forEach((index) => {
        strong.push(formatName(index.name));
    })
    if (Object.keys(typeTwo).length != 0) {
        typeTwo.double_damage_to.forEach((index) => {
            if(!strong.includes(formatName(index.name))) {
                strong.push(formatName(index.name));
            }
        })
    }
    return strong;
}
    
function weak(typeOne, typeTwo) {
    let weak = [];
    typeOne.double_damage_from.forEach((index) => {
        weak.push(formatName(index.name));
    })
    if (Object.keys(typeTwo).length != 0) {
        typeTwo.double_damage_from.forEach((index) => {
            if(!weak.includes(formatName(index.name))) {
                weak.push(formatName(index.name));
            }
        })
    }
    return weak;
}

function findDuplicates(strong, weak) {
    const dupes = strong.filter((type) => weak.includes(type));
    return dupes;
}