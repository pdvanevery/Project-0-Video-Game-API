
function fetchPokemon(){

fetch("https://pokeapi.co/api/v2/pokemon/mudkip")
    .then(res => res.json())
    .then(data => {console.log(data)
        document.querySelector('#name').innerHTML = `
        <h1>${data.name}</h1> 
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}"/>
        `
        
    })} 


    fetchPokemon()
    














