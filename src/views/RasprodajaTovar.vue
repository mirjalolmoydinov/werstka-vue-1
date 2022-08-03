<template>
  <div class="rasprodaja">
    <baner-van-vie></baner-van-vie>
    <banner-tow-vie></banner-tow-vie>
    <banner-sre-vie></banner-sre-vie>
    <banner-fo-vie></banner-fo-vie>
    
  </div>
</template>

<script>
// import BanerVanVie from '@/components/menu_2_components/BanerVanVie.vue';
// import BannerTowVie from '@/components/menu_2_components/BannerTowVie.vue';
// import BannerSreVie from '@/components/menu_2_components/BannerSreVie.vue';
// import BannerFoVie from '@/components/menu_2_components/BannerFoVie.vue';
export default {
  components: { BanerVanVie:()=>import(`@/components/menu_2_components/BanerVanVie.vue`),
   BannerTowVie:()=>import(`@/components/menu_2_components/BannerTowVie.vue`), 
   BannerSreVie:()=>import(`@/components/menu_2_components/BannerSreVie.vue`),
    BannerFoVie:()=>import(`@/components/menu_2_components/BannerFoVie.vue`),
     },
};
</script>

<style scoped>
body{
  background-color: #E5E5E5;
}
</style>