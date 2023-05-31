export default class PokemonData {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async getData(name) {
        const response = await fetch(this.baseURL + `pokemon/${name}`);
        const data = await response.json();
        return data;
    }

    async getTypes() {
        const response = await fetch(this.baseURL + "type");
        const data = await response.json();
        return data.results;
    }

    async getDamage(type) {
        const list = await this.getTypes();
        let typeNum;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name == type) {
                typeNum = i + 1;
            }
        }
        const response = await fetch(this.baseURL + `type/${typeNum}`);
        const data = await response.json();
        return data.damage_relations;
    }

    async getList(page) {
        const offset = 30 * (page - 1);
        const response = await fetch(this.baseURL + `pokemon?offset=${offset}&limit=30`);
        const data = await response.json();
        return data;
    }

    async getAll() {
        const response = await fetch(this.baseURL + `pokemon?offset=0&limit=10000`);
        const data = await response.json();
        return data;
    }
}