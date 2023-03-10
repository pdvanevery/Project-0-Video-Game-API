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
            <div class="pokeInfoCard">
                <div class="nameCard">
                    <h1>${capitalizeFirstLetter(data.name)}</h1> 
                    <h2>${capitalizeFirstLetter(data.types[0].type.name)}</h2>
                </div>
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalizeFirstLetter(data.name)}"/>
                <div class="stats">
                    <h3>HP: ${data.stats[0].base_stat}</h3>
                    <h3>Attack: ${data.stats[1].base_stat}</h3>
                    <h3>Defense: ${data.stats[2].base_stat}</h3>
                    <h3>Special Attack: ${data.stats[3].base_stat}</h3>
                    <h3>Special Defense: ${data.stats[4].base_stat}</h3>
                    <h3>Speed: ${data.stats[5].base_stat}</h3>
                </div>
            </div>
            `
        
})} 


   
    














