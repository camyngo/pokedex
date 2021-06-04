import pokemons from './pokemons.js';
import firebase from './firebaseConfig';

const db = firebase.firestore()

export async function importAllPokemons() {
    await Promise.all(pokemons.map(pokemon => db.collection('pokemon').add(pokemon)))
    console.log("who's the best? Oh yeah, Brett is")
}