<template>
  <div class="rasprodaja">
    <baner-van-vie></baner-van-vie>
    <banner-tow-vie></banner-tow-vie>
    <banner-sre-vie></banner-sre-vie>
    <banner-fo-vie></banner-fo-vie>
  </div>
</template>

<script>
import BanerVanVie from '@/components/menu_2_components/BanerVanVie.vue';
import BannerTowVie from '@/components/menu_2_components/BannerTowVie.vue';
import BannerSreVie from '@/components/menu_2_components/BannerSreVie.vue';
import BannerFoVie from '@/components/menu_2_components/BannerFoVie.vue';
export default {
  components: { BanerVanVie, BannerTowVie, BannerSreVie, BannerFoVie },
};
</script>

MenuVie