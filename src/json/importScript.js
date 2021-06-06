import pokemons from './pokemons.js';
import firebase from '../firebaseConfig.js';

const db = firebase.firestore()
export async function importAllPokemons() {
    await Promise.all(pokemons.map(pokemon => db.collection('pokemon').add(pokemon)))
    console.log("who's the best? Oh yeah, Brett is")
}

export async function getAlldatabase(){
    var pokedex = db.collection("pokemon");
    const querySnapshot = await pokedex.get()
    return querySnapshot.docs.map(doc => doc.data()).sort((a, b) => {
      return a.id - b.id
    })
}



