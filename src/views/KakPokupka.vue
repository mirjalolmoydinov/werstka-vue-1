<template>
  <div id="kakpokubka">
  <MenuVie></MenuVie>
  <BannerView></BannerView>
  <SliderView></SliderView>
  <ProdokView></ProdokView>
  <ContentView></ContentView>
  <TowTextView></TowTextView>
  </div>
</template>
<script>
import MenuVie from '@/components/MenuVie.vue'
import BannerView from '@/components/menu_1_components/BannerView.vue'
import SliderView from '@/components/menu_1_components/SliderView.vue'
import ProdokView from '@/components/menu_1_components/ProdokView.vue'
import ContentView from '../components/menu_1_components/ContentView.vue'
import TowTextView from '../components/menu_1_components/TowTextView.vue'
export default {
components:{
    MenuVie,
    BannerView,
    SliderView,
    ProdokView,
    ContentView,
    TowTextView,
},
}
</script>

<style>


</style>