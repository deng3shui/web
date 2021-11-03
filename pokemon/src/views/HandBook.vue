<template>
  <div>
    <h1>{{value}}</h1>
    <el-select v-model="value"
               placeholder="请选择类型"
               @change="typeChange()">
      <el-option
          v-for="(item,value) in colors"
          :key="value"
          :value="value"
      >
      </el-option>
    </el-select>
    <el-input
        style="width: 220px ;margin-left: 100px"
        placeholder="请输入查找名字"
        prefix-icon="el-icon-search"
        v-model="pokemonName"
        @keyup="nameChange()"
    >
    </el-input>
    <pokemon-card :type="pokemonType" :name="pokemonName" ></pokemon-card>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";
let pokemonType = {}
let  pokemonName = {}
export default {
  name: "HandBook",
  components: {
    PokemonCard
  },
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
      value:'all',
      pokemonType,
      pokemonName,

    }
  },
  methods:{
    typeChange(){
      this. pokemonType.isShow = true
      this.pokemonName.valu = false
      this.pokemonType.value = this.value
      console.log("调用typechange",this.pokemonType.value,this. pokemonType.isShow)
    },
    nameChange(){
      this. pokemonName.isShow = true
      this. pokemonType.isShow = false
      this.pokemonName.value = this.value
      console.log("调用Namechange",this.pokemonName.value,this. pokemonName.isShow)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
