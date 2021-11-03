<template>
  <div class="container">
    <h1>type{{type.value}} name{{pokemonNameIsShow}}</h1>
    <div class="poke-container"  v-for="(item,index) in pokemons">
      <div class="pokemon" :style="{ backgroundColor: colors[item.type]}"  v-show="isType(item.type)">
        <div class="img-container">
          <img v-lazy="item.src" alt="">
        </div>
        <div class="info">
          <span class="number">ID:{{ item.id.toString().padStart(3, '0')}}</span>
          <h3 class="name">{{ item.name}}</h3>
          <small class="type">Type: <span>{{ item.type}}</span> </small>
        </div>
      </div>
<!--      <div class="pokemon" :style="{ backgroundColor: colors[item.type]}" @keyup="isName(pokemonName,item.name)" v-show="pokemonNameIsShow">-->
<!--        <div class="img-container">-->
<!--          <img v-lazy="item.src" alt="">-->
<!--        </div>-->
<!--        <div class="info">-->
<!--          <span class="number">ID:{{ item.id.toString().padStart(3, '0')}}</span>-->
<!--          <h3 class="name">{{ item.name}}</h3>-->
<!--          <small class="type">Type: <span>{{ item.type}}</span> </small>-->
<!--        </div>-->
<!--      </div>-->
    </div>


  </div>
</template>

<script>
import axios from 'axios'
const pokemons = []
let pokemonTypeIsShow = true
let pokemonNameIsShow = false
export default {
  name: "PokemonCard",
  props: ['type','name'],
  data(){
    return{
      colors : {
        all:"all",
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
      },
      pokemons,
      pokemonType:'all',
      pokemonName:'',
      pokemonTypeIsShow,
      pokemonNameIsShow,
    }
  },
  methods: {
    getPokemon(count) {
      axios

          .get('https://pokeapi.co/api/v2/pokemon/' + count)
          .then(response => {
                let obj = {}
                let types = response.data.types.map(type => type.type.name)
                obj.type = types[0];
                obj.name = response.data.name;
                obj.id = response.data.id;
                obj.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
                this.pokemons.push(obj)
                count++
                if (count < 899) {
                  this.getPokemon(count)
                }
              }
          )
    },
    isName(inputName, name) {
      this.pokemonTypeIsShow = false  //禁用按类型显示
      if (inputName != name) return false
      else return true
    },
    isType(nowType) {
      if ((this.type.value === 'all' || this.type.value === nowType)&&this.type.isShow) {

        return true
      }
      else{
        return false
      }
        // this.pokemonTypeIsShow = false

    },
    test(a){
      console.log(this.isType(a))

    }
  },
  beforeMount() {
    this.getPokemon(1)
    console.log(this.pokemons)
  },
  watch: {
    // 监听childFrom（父组件传来的数据），并赋值给子组件的表单中
    type: {
      handler(val) {
        this.pokemonType = this.type;
      }
    },
    name: {
      handler(val) {
        this.pokemonName = this.name;
      }
    },
  }
}
</script>

<style>
.container{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px;
}

.poke-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}

</style>
