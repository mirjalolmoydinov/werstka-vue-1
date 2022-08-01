<template>
  <div id="app">
    <kak-pokupka></kak-pokupka>
    <rasprodaja-tovar></rasprodaja-tovar>
  </div>
</template>
<script>
import KakPokupka from '@/views/KakPokupka.vue'
import RasprodajaTovar from './views/RasprodajaTovar.vue'
export default{
  components:{
    KakPokupka,
    RasprodajaTovar
  },
data() {
  return {
    
  }
},
}
</script>

<style>
@import '../src/assets/style/main.css';
nav a.router-link-exact-active {
  color: #050505;
}
body{
  background: #E5E5E5;
}
</style>
