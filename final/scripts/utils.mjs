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

export function addToRecent(name) {
    let recents = JSON.parse(localStorage.getItem("recent-list"));
    if (recents === null) {
        recents = [];
    }
    if (!recents.includes(name)) {
        if (recents.length == 5) {
            recents.shift();
        }
        recents.push(name);
    }
    localStorage.setItem("recent-list", JSON.stringify(recents));
}

export function displayRecentList() {
    let recents = JSON.parse(localStorage.getItem("recent-list"));
    let list = "";

    for (let i = recents.length - 1; i >= 0; i--) {
        list += `<li><a href="./details.html?pokemon=${recents[i]}">${formatName(recents[i])}</a></li>`;
    }
    document.querySelector(".recent").innerHTML = list;
}