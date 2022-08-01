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
          <img src="../assets/img/User.svg" alt="" style="width:34px;height:34px;">
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
<style scoped>
@import '../assets/style/main.css';
* {
  margin: 0;
  padding: 0;
    box-sizing: border-box;
  text-decoration: none;
  list-style-type:none;
}

#navbar_menu {
  max-width: 100%;
  height: 120px;
}

.navbar {
  max-width: 1920px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  /* background-color: rgb(190, 164, 164); */
  padding: 36px 100px;
  margin: 0 auto;
  overflow: hidden;
}

.logo_navbar {
  width: 190px;
  height: 48px;
}

.logo_navbar img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

.menu_navbar ul {
  display: flex;
  flex-wrap: wrap;

}

.menu_navbar ul li {
  margin-left: 25px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  color: #1F2428;
}

.sign_navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign_navbar .sign_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  cursor: pointer;
}

.sign_icon .span_sign {
  display: inline-block;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  color: #1F2428;
}

.sign_icon img {
  cursor: pointer;
  display: inline-block;
  padding-right: 11px;
}


.phone_menu .phone {
  cursor: pointer;
  border: none;
  width: 176px;
  padding-top: 15px;
  padding-bottom: 17px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  background: linear-gradient(90deg, #00C97B 0%, #00D981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
}
</style>