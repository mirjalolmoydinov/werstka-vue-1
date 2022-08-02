<template>
  <div id="app">
    <MenuVie></MenuVie>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import MenuVie from "@/components/MenuVie.vue";
import Footer from "@/components/FooterVie.vue";
export default {
  components: {
    MenuVie,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import "../src/assets/style/main.css";
nav a.router-link-exact-active {
  color: #050505;
}
body {
  background: #e5e5e5;
}
</style>
