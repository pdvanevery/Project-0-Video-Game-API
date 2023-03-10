

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchPokemon(){

fetch("https://pokeapi.co/api/v2/pokemon/mudkip")
    .then(res => res.json())
    .then(data => {console.log(data)
        document.querySelector('#pokecard').innerHTML = `
        <h1>${capitalizeFirstLetter(data.name)}</h1> 
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalizeFirstLetter(data.name)}"/>
        `
        
    })} 


    fetchPokemon()
    














