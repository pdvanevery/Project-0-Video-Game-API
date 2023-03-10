let btn = document.querySelector('#btn')

btn.addEventListener('click', fetchPokemon)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchPokemon(){

    const name = document.querySelector('#pokemonName').value

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            document.querySelector('#pokecard').innerHTML = `
            <h1>${capitalizeFirstLetter(data.name)}</h1> 
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalizeFirstLetter(data.name)}"/>
            `
        
})} 


   
    














