const button = document.querySelector("button");
button.addEventListener("click", () => {
    let query = document.getElementById("query").value;
    location.replace(`search.html?query=${query}`);
})