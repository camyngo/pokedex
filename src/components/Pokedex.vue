<template>
  <div class="pokedex-background">
    <b-container class="bv-example-row">
    <div class="row filters">
      <div class="col-md-4">
        <form @submit.prevent.stop="searchMoves" >
          <br/>
          <h2 class="heading">Search By Move</h2>
          <select multiple v-model="selected" type='text'>
            <option value=0 selected>All Pokemon</option>
            <option v-for="move in uniqueMoves" v-bind:key="move">{{move}}</option>
          </select>
          <br>
          <b-button pill type="submit" class="btn btn-danger submitSearch">
            <span>
              <b class="glyphicon glyphicon glyphicon-search"></b>
              <b class="glyphicon glyphicon glyphicon-king"></b>
              <b class="glyphicon glyphicon glyphicon-queen"></b>
              <b class="glyphicon glyphicon glyphicon-knight"></b>
            </span>
          </b-button>
        </form>
      </div>

      <div class="col-md-4 top-center">

        <br/>
        <div class="row pokedex-title">
          <h1>The Complete Pokedex</h1>
          <h2>Original 151</h2>
        </div>

        <div class="row">
          <form action="/pokedex/name-search" method="post">
            <input id="name" name="name" type="text" autocomplete="off" required>
            <b-button pill type="submit" class="btn btn-success" id="nameSearch">Search Pok&eacute;mon By Name</b-button>
          </form>
        </div>

        <div class="row">
          <form action="/pokedex/strong-against-search" method="post">
            <input id="strongAgainst" name="strongAgainst" type="text" autocomplete="off" required>
            <b-button pill type="submit" class="btn btn-success" id="idealSearch">Enter Pok&eacute;mon For Its Ideal Foes</b-button>
          </form>
        </div>

      </div>

      <div class="col-md-4">
        <br/>
        <form action="/pokedex/type-search" method="post">
          <h2 class="heading">Search By Type</h2>
          <select multiple type='text'>
            <option value="All" selected>All Pokemon</option>
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
          <br>
          <b-button pill type="submit" class="btn btn-danger submitSearch">
            <span>
              <b class="glyphicon glyphicon glyphicon-search"></b>
              <b class="glyphicon glyphicon glyphicon-leaf"></b>
              <b class="glyphicon glyphicon glyphicon-fire"></b>
              <b class="glyphicon glyphicon glyphicon-tint"></b>
            </span>
          </b-button>
        </form>
      </div>
<!--      display pokedex database-->
      <div class="container">
          <div class="row list">
              <div v-for="(pokemon, position) in pokemons" v-bind:key="position">
                <b-container class="bv-example-row">
                <div class = "col-md-3">
<!--                  <a :href="require(`./public/pokemon`)" class="link"/>-->
                  <div class = "pokebox">
                    <h1>#{{ pokemon.id }} </h1>
                    <h1>{{ pokemon.name }} </h1>
                    <img :src="require(`../resources/pokemon/${pokemon.name}.gif`)">
                  </div>
                </div>
                </b-container>
              </div>
          </div>
      </div>

    </div>
    </b-container>



    <footer class="footerDeco">
      <br>
      <a href="/" class="btn btn-info home">Back To Home</a>
      <br>
    </footer>
    </div>
</template>

<script>
    import {getAlldatabase} from "../json/importScript";
    export default {
        name: 'Pokedex',
        data() {
            return {
                pokemons: [],
                moves:[],
                selected: null
            }
        },
        async created() {
            this.pokemons = await getAlldatabase();
        },
        computed: {
          uniqueMoves() {
            return this.pokemons.reduce((moves, pokemon) => {
              pokemon.moves_pokemons.forEach(({ moves: [{ name }] }) => {
                if(!moves.includes(name)) {
                  moves.push(name)
                }
              })
              return moves
            }, []).sort()
          }
        },
        methods: {
            displaybyID(key){
                return this.pokemons.filter((pokemon) => {
                    return pokemon['id'] ==  key;
                })
            },
            searchMoves(){
                let result = this.pokemons
                result = result.filter((pokemon) => {return (pokemon.moves_pokemons)})
                return result;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    font-size: 2rem;
  }
  /*.list{*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  flex-flow: row nowrap;*/
  /*  overflow: auto;*/
  /*}*/
</style>
