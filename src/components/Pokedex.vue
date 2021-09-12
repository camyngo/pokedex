<template>
  <div class="pokedex-background">
    <b-container class="bv-example-row">
      <div class="row filters">
        <div class="col-md-4">
          <br />
          <h2 class="heading">Search By Move</h2>
          <select v-model="selectedMove" type="text" size="10">
            <option value="0" selectedMove>All Pokemon</option>
            <option v-for="move in uniqueMoves" v-bind:key="move">{{move}}</option>
          </select>
          <br />
          <b-button @click="searchByMove" pill class="btn btn-danger submitSearch">
            <span>
              <b class="glyphicon glyphicon glyphicon-search"></b>
              <b class="glyphicon glyphicon glyphicon-king"></b>
              <b class="glyphicon glyphicon glyphicon-queen"></b>
              <b class="glyphicon glyphicon glyphicon-knight"></b>
            </span>
          </b-button>
        </div>

        <div class="col-md-4 top-center">
          <br />
          <div class="row pokedex-title">
            <h1>The Complete Pokedex</h1>
            <h2>Original 151</h2>
          </div>

          <input id="name" v-model="name" name="name" type="text" autocomplete="off" />
          <b-button
            @click="searchByName"
            pill
            value="Submit"
            class="btn btn-success"
            id="nameSearch"
          >Search Pok&eacute;mon By Name</b-button>
        </div>

        <div class="col-md-4">
          <br />
          <h2 class="heading">Search By Type</h2>
          <select type="text" v-model="selectedType" size="10">
            <option value="All">All Pokemon</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Electric">Electric</option>
            <option value="Poison">Poison</option>
            <option value="Bug">Bug</option>
            <option value="Psychic">Psychic</option>
            <option value="Ghost">Ghost</option>
            <option value="Rock">Rock</option>
            <option value="Ground">Ground</option>
            <option value="Fighting">Fighting</option>
            <option value="Normal">Normal</option>
            <option value="Flying">Flying</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
          </select>
          <br />
          <b-button pill @click="searchByType" class="btn btn-danger submitSearch">
            <span>
              <b class="glyphicon glyphicon glyphicon-search"></b>
              <b class="glyphicon glyphicon glyphicon-leaf"></b>
              <b class="glyphicon glyphicon glyphicon-fire"></b>
              <b class="glyphicon glyphicon glyphicon-tint"></b>
            </span>
          </b-button>
        </div>

        <!--      display pokedex database-->
        <b-container>
          <b-row>
            <b-col cols="3" v-for="(pokemon, position) in searchResults" v-bind:key="position">
              <b-container class="bv-example-row">
                <div class="pokebox">
                  <h1>#{{ pokemon.id }}</h1>
                  <h1>{{ pokemon.name }}</h1>
                  <img :src="require(`../resources/pokemon/${pokemon.name}.gif`)" />
                </div>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>

    <footer class="footerDeco">
      <br />
      <router-link to="/" class="btn btn-info home">Back To Home</router-link>
      <br />
    </footer>
  </div>
</template>

<script>
import { getAlldatabase } from "../json/importScript";
export default {
  name: "Pokedex",
  data() {
    return {
      pokemons: [],
      searchResults: [],
      moves: [],
      name: "",
      selectedMove: "",
      selectedType: "",
      display: Boolean
    };
  },
  async created() {
    const retrievedPokemons = await getAlldatabase();
    this.pokemons = [...retrievedPokemons];
    this.searchResults = [...retrievedPokemons];
    this.displayAll();
  },
  computed: {
    uniqueMoves() {
      return this.pokemons
        .reduce((moves, pokemon) => {
          pokemon.moves_pokemons.forEach(({ moves: [{ name }] }) => {
            if (!moves.includes(name)) {
              moves.push(name);
            }
          });
          return moves;
        }, [])
        .sort();
    },
    searchMoves() {
      let list = this.pokemons;
      let result = this.selectedMove;
      if (result != "" && result) {
        result = list.filter(pokemon => {
          return pokemon.moves_pokemons;
        });
      }
      return result;
    }
  },
  methods: {
    searchByType() {
      if (this.selectedType === "All") {
        this.searchResults = [...this.pokemons];
      } else {
        this.searchResults = this.pokemons.filter(pokemon =>
          [pokemon.type_1, pokemon.type_2].includes(this.selectedType)
        );
      }
    },
    searchByName() {
      this.searchResults = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.name.toLowerCase())
      );
    },
    searchByMove() {
      if (this.selectedMove === "0") {
        this.searchResults = [...this.pokemons];
      } else {
        this.searchResults = this.pokemons.filter(({ moves_pokemons }) =>
          moves_pokemons.some(
            ({ moves: [{ name }] }) => name === this.selectedMove
          )
        );
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-size: 2rem;
}
/*.list{*/
/*  display: flex;*/
/*  align-items: center;*/
/*  flex-flow: row nowrap;*/
/*  overflow: auto;*/
/*}*/
</style>
