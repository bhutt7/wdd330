export default class PokemonDetails {
    constructor(name, dataSource) {
        this.name = name;
        this.dataSource = dataSource;
        this.pokemon = {};
    }

    async init() {
        this.pokemon = await this.dataSource.getData(this.name);
        this.renderDetails("main");
    }

    renderDetails(selector) {
        console.log(this.pokemon);
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", detailsTemplate(this.pokemon));
    }
}

function detailsTemplate(pokemon) {
    const name = formatName(pokemon.species.name);
    const types = typeList(pokemon);
    const abilities = abilityList(pokemon);
    const allStats = baseStatTotal(pokemon);
    const height = formatUnit(pokemon.height);
    const weight = formatUnit(pokemon.weight);

    return `<section class="pokemon-details">
                <h2 class="name">${name}</h2>
                <img class="display" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${name}">
                <h3>Pokedex Entry: <span id="entry">${pokemon.id}</span></h3>
                <h4>Type(s)</h4>
                <ul class="types">${types}</ul>
                <h4>Abilities</h4>
                <ul class="abilities">${abilities}</ul>
                <h4>Base Stats</h4>
                <ul class="stats">
                    <li>HP: ${pokemon.stats[0].base_stat}</li>
                    <li>Attack: ${pokemon.stats[1].base_stat}</li>
                    <li>Defense: ${pokemon.stats[2].base_stat}</li>
                    <li>Sp. Attack: ${pokemon.stats[3].base_stat}</li>
                    <li>Sp. Defense: ${pokemon.stats[4].base_stat}</li>
                    <li>Speed: ${pokemon.stats[5].base_stat}</li>
                    <li class="total">Base Stat Total: ${allStats}</li>
                </ul>
                <h4 class="dimensions">Weight: ${weight} kg</h4>
                <h4 class="dimensions">Height: ${height} m</h4>
            </section>`;
}

function formatName(name) {
    const first = name.charAt(0);
    const upper = first.toUpperCase();
    const remainder = name.slice(1);
    return upper + remainder;
}

function typeList(pokemon) {
    if (pokemon.types.length > 1) {
        return `<li>${formatName(pokemon.types[0].type.name)}</li>
        <li>${formatName(pokemon.types[1].type.name)}</li>`;
    } else {
        return `<li>${formatName(pokemon.types[0].type.name)}</li>`;
    }
}

function abilityList(pokemon) {
    let list = "";
    pokemon.abilities.forEach((index) => {
        list += `<li>${formatName(index.ability.name)}</li>`
    })
    return list;
}

function baseStatTotal(pokemon) {
    let total = 0;
    pokemon.stats.forEach((stat) => {
        total += stat.base_stat;
    })
    return total;
}

function formatUnit(number) {
    let string = number.toString();
    return string.slice(0, -1) + "." + string.slice(-1);
}