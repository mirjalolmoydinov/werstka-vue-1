<template>
  <div id="banner">
    <div class="banner_glavni">
      <div class="container_banner_1">
        <p class="p_banner">Доставка товаров из Великобритании в Россию</p>
        <p class="p_banner_2">Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду,
          обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
        </p>
        <a href="#" class="banner_a">Получить адрес в UK</a>
      </div>
      <div class="container_banner_2">
        <img src="../../assets/img/banner.svg" alt="" class="baner_img">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../assets/style/main.css';
#banner {
  width: 100%;
  height: 680px;
  background-color: aqua;
  display: flex;
  justify-content: center;
}

.banner_glavni {
  max-width: 1800px;
  height: 680px;
  background: linear-gradient(79.63deg, #5B52A3 1.08%, #40B8EA 100%);
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 140px;
  overflow: hidden;
  margin: 0 60px;

}

.container_banner_1 .p_banner {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 52px;
  line-height: 70px;
  color: #FFFFFF;
 
  margin-bottom: 8px;
}

.container_banner_1 .p_banner_2 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  color: #FFFFFF;
}


.container_banner_1 .banner_a {
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 66px;
  background: linear-gradient(90deg, #00C97B 0%, #00D981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 14px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 36px;
}

.container_banner_2 {
  width: 573px;
  height: 571.12px;
  margin-left: 36px;
}

.container_banner_2 .baner_img{
  width: 570px;
  height: auto;
  object-fit: cover;

}
</style>