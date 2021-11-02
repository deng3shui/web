<template>
  <div>
<!--    &lt;!&ndash;  <div><a>类型：</a><el-select v-for="item in colors" v-model="value"  placeholder="请选择">&ndash;&gt;-->

<!--    <div><a>类型：</a><el-select ref="select" v-model="value"  placeholder="请选择">-->

<!--      <el-option-->
<!--          v-for="(value,key) in colors"-->
<!--          :value="key"-->
<!--      >-->
<!--      </el-option>-->
<!--    </el-select></div>-->
<!--    <el-option-->
<!--        v-for="(value,key) in colors"-->
<!--        :value="key"-->
<!--    >-->
<!--    </el-option>-->
    <el-button>默认按钮</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
          v-for="(item,value) in colors"
          :key="value"
          :value="value"
      >
      </el-option>
    </el-select>
    <pokemon-card :type="value"></pokemon-card>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";

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
      value:'',

    }
  },
}
</script>

<style scoped>

</style>
