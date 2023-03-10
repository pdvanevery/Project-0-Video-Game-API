let btn = document.querySelector('#btn')

btn.addEventListener('click', fetchPokemon)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); //takes letter at index 0, capitalizes it, then adds the rest of the string to it
}

function makeLowerCase(string) {
    return string.toLowerCase(); //takes user input and makes it lowercase so pokeapi can find mon
}

function fetchPokemon(){

    const name = document.querySelector('#pokemonName').value
    const pokeName = makeLowerCase(name)
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            document.querySelector('#pokecard').innerHTML = `
            <h1>${capitalizeFirstLetter(data.name)}</h1> 
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalizeFirstLetter(data.name)}"/>
            `
        
})} 


   
    














