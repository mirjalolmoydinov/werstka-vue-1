<template>
  <div id="kakpokubka">
    <BannerView></BannerView>
    <SliderView></SliderView>
    <ProdokView></ProdokView>
    <ContentView></ContentView>
    <TowTextView></TowTextView>
    <FormaView></FormaView>
    <variant-dostavka-vie></variant-dostavka-vie>
    <ByukBritanyaVie></ByukBritanyaVie>
    <virtual-vie></virtual-vie>
    <tow-text></tow-text>
    <sri-card-vie></sri-card-vie>
    <banner-van-viw></banner-van-viw>
    <banner-fayf-vie></banner-fayf-vie>
  </div>
</template>
<script>
// import SliderView from "@/components/menu_1_components/SliderView.vue";
// import ProdokView from "@/components/menu_1_components/ProdokView.vue";
// import BannerView from "@/components/menu_1_components/BannerView.vue";
// import ContentView from "@/components/menu_1_components/ContentView.vue";
// import TowTextView from "@/components/menu_1_components/TowTextView.vue";
// import FormaView from "@/components/menu_1_components/FormaView.vue";
// import VariantDostavkaVie from "@/components/menu_1_components/VariantDostavkaVie.vue";
// import ByukBritanyaVie from "@/components/menu_1_components/ByukBritanyaVie.vue";
// import VirtualVie from "@/components/menu_1_components/VirtualVie.vue";
// import TowText from "@/components/menu_1_components/TowText.vue";
// import SriCardVie from "@/components/menu_1_components/SriCardVie.vue";
// import BannerVanViw from '@/components/menu_1_components/BannerVanViw.vue';
// import BannerFayfVie from '@/components/menu_2_components/BannerFayfVie.vue';

export default {
  components: {
    BannerView:()=>import(`@/components/menu_1_components/BannerView.vue`),
    SliderView:()=>import(`@/components/menu_1_components/SliderView.vue`),
    ProdokView:()=>import(`@/components/menu_1_components/ProdokView.vue`),
    ContentView:()=>import(`@/components/menu_1_components/ContentView.vue`),
    TowTextView:()=>import(`@/components/menu_1_components/TowTextView.vue`),
    FormaView:()=>import(`@/components/menu_1_components/FormaView.vue`),
    VariantDostavkaVie:()=>import(`@/components/menu_1_components/VariantDostavkaVie.vue`),
    ByukBritanyaVie:()=>import(`@/components/menu_1_components/ByukBritanyaVie.vue`),
    VirtualVie:()=>import(`@/components/menu_1_components/VirtualVie.vue`),
    TowText:()=>import(`@/components/menu_1_components/TowText.vue`),
    SriCardVie:()=>import(`@/components/menu_1_components/SriCardVie.vue`),
    BannerVanViw:()=>import(`@/components/menu_1_components/BannerVanViw.vue`),
    BannerFayfVie:()=>import(`@/components/menu_2_components/BannerFayfVie.vue`),
  },
};
</script>

<style scoped>
body{
  background-color: #E5E5E5;
}
</style>