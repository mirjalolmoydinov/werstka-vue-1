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
  </div>
</template>
<script>
import BannerView from "@/components/menu_1_components/BannerView.vue";
import SliderView from "@/components/menu_1_components/SliderView.vue";
import ProdokView from "@/components/menu_1_components/ProdokView.vue";
import ContentView from "../components/menu_1_components/ContentView.vue";
import TowTextView from "../components/menu_1_components/TowTextView.vue";
import FormaView from "@/components/menu_1_components/FormaView.vue";
import VariantDostavkaVie from "@/components/menu_1_components/VariantDostavkaVie.vue";
import ByukBritanyaVie from "../components/menu_1_components/ByukBritanyaVie.vue";
import VirtualVie from "@/components/menu_1_components/VirtualVie.vue";
import TowText from "@/components/menu_1_components/TowText.vue";
import SriCardVie from "@/components/menu_1_components/SriCardVie.vue";
import BannerVanViw from '@/components/menu_1_components/BannerVanViw.vue';

export default {
  components: {
    BannerView,
    SliderView,
    ProdokView,
    ContentView,
    TowTextView,
    FormaView,
    VariantDostavkaVie,
    ByukBritanyaVie,
    VirtualVie,
    TowText,
    SriCardVie,
    BannerVanViw,
  },
};
</script>

<style>
</style>