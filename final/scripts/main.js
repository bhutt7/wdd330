import { displayRecentList } from "./utils.mjs";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let query = document.getElementById("query").value;
    location.replace(`search.html?query=${query}`);
})

const recents = localStorage.getItem("recent-list");
if (recents != null) {
    displayRecentList();
}