export function getParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export function formatName(name) {
    const first = name.charAt(0);
    const upper = first.toUpperCase();
    const remainder = name.slice(1);
    return upper + remainder;
}

export function formatUnit(number) {
    let string = number.toString();
    return string.slice(0, -1) + "." + string.slice(-1);
}

export function hasTwoTypes(pokemon) {
    if (pokemon.types.length > 1) {
        return true;
    } else {
        return false;
    }
}