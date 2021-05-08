let input = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    window.location.replace(`https://www.google.com/search?q=${input.value}`);
    input.value = "";
});