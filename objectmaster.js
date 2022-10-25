const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);



//1 
//an array of pkmn objects where id is divisble by 3
// const pkmnObjects = pokemon.filter(p => p["id"] % 3 === 0);
// console.log(pkmnObjects);


//2
//an array of pkmn objects that are "fire" type
// const pkmnObjects = pokemon.filter(p => p["types"] == "fire"); //will return if they are purely type fire
// // const pkmnObjects = pokemon.filter(p => p["types"].includes("fire")); //will return if they are secondary fire as well
// console.log(pkmnObjects);


//3
//an array of pkmn objects that have more than one type
// const pkmnObjects = pokemon.filter(p => p["types"].length > 1)
// console.log(pkmnObjects);


//4
//an array with just the names of the pkmn
// const pkmnObjects = pokemon.map(p => p["name"]);
// console.log(pkmnObjects);


//5
//an array with just the names of pkmn with an id greater than 99
// const pkmnObjects = pokemon.filter(p => p["id"] > 99).map(p => p["name"]);
// console.log(pkmnObjects);


//6
//an array with just the names of the pkmn whose only type is poison
// const pkmnObjects = pokemon.filter(p => p["types"] == "poison");
// console.log(pkmnObjects);


//7
//an array containing just the first type of all the pkmn whose second type is "flying"
// const pkmnObjects = pokemon.filter(p => p["types"][1] == "flying");
// console.log(pkmnObjects);


//8
//a count of the number of pkmn that are "normal" type
// const pkmnObjects = pokemon.filter(p => p["types"] == "normal").length;
// console.log(pkmnObjects);





//creates a list of pokemon that have names that start with the letter "B"
// const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn);

//creates a list of Id's
// const pkmnIds = pokemon.map( p => p.id )
// console.log(pkmnIds);

