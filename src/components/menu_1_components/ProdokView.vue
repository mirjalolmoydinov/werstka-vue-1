<template>
  <div id="produkt">
    <b-container>
    <div class="prodok_tovar">
      <div class="container_1_produkt">
        <img src="../../assets/img/prodok_1.svg" alt="">
        <p>Экономия <br>
          до 70%</p>
      </div>
      <div class="container_2_produkt">
        <img src="../../assets/img/prodok_2.svg" alt="">>
        <p>Только подлинная продукция</p>
      </div>
      <div class="container_3_produkt">
        <img src="../../assets/img/prodok_3.svg" alt="">
        <p>Оперативная доставка</p>
      </div>
      <div class="container_4_produkt">
        <img src="../../assets/img/prodok_4.svg" alt="">
        <p>Огромный выбор товаров</p>
      </div>
    </div>
   </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#produkt {
  
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;

}

.prodok_tovar {
  margin: 0 auto;
  width: 1400px;
  height: 180px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 70px rgba(138, 138, 138, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 51px;
}

.prodok_tovar .container_2_produkt,
.prodok_tovar .container_3_produkt,
.prodok_tovar .container_4_produkt {
  width: 322px;
  height: 135.5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 61px;
  border-left: 2px solid #C0C9D7;
}
.prodok_tovar .container_1_produkt {
  /* padding-left: 51px; */
  width: 222px;
  height: 135.5px;
  display: flex;
  align-items: center;

}

.prodok_tovar .container_1_produkt p,
.prodok_tovar .container_2_produkt p,
.prodok_tovar .container_3_produkt p,
.prodok_tovar .container_4_produkt p {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #1F2428;
  padding-left: 26px;
}

img {
  width: 60px;
  height: 60px;
}
</style>