let btn = document.querySelector('#btn');
let div = document.querySelector('#champion')

btn.addEventListener('click', myFunc);

async function myFunc() {
    let category = "name";
    let response = await fetch(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/random?category=${category}`);
    let parsedRes = await response.json();
    div.innerHTML = parsedRes.value;
    console.log(response)
}