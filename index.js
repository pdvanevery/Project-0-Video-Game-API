let btn = document.querySelector("#btn");
let div = document.querySelector("#name");

btn.addEventListener('click', getPokemon)

function getPokemon() {

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => console.log(data))
}