import { displayRecentList } from "./utils.mjs";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let query = document.getElementById("query").value;
    if (query != "") {
        location.replace(`search.html?query=${query}`);
    } else {
        document.getElementById("query").classList.add("no-query");
    }
})

const recents = localStorage.getItem("recent-list");
if (recents != null) {
    displayRecentList();
}