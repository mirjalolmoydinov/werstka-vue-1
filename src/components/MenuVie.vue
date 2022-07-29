<template>
  <div id="navbar_menu">
    <div class="navbar">
      <div class="logo_navbar">
        <a href="#">
        <img src="../assets/img/logo.svg" alt="">
        </a>
      </div>
      <div class="menu_navbar">
        <nav>
          <ul>
            <li>
              <router-link to="/">Как покупать</router-link>
            </li>
            <li>
              <router-link to="/rasprodaja">Распродажи</router-link>
            </li>
            <li>
              <router-link to="/senna">Цены</router-link>
            </li>
            <li>
              <router-link to="/pomosh">Помощь</router-link>
            </li>
            <li>
              <router-link to="/bonus">Бонусы</router-link>
            </li>
            <li>
              <router-link to="/blog">Блог</router-link>
            </li>
            <li>
              <router-link to="/yshyo">Магазины</router-link>
            </li>
          </ul>
        </nav>

      </div>
      <div class="sign_navbar">
        <div class="sign_icon">
          <img src="../assets/img/User.svg" alt="">
          <a class="span_sign">Вход</a>
        </div>
        <div class="phone_menu">
          <button class="phone">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>





/* scoped */
<style>
@import '../assets/style/navbar.css';
@import '../assets/style/main.css';

</style>