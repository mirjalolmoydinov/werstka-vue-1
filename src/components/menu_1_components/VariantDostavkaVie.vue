<template>
  <div id="variant">
    <b-container>
      <h2>Варианты доставки:</h2>
      <div class="variant_content">
        <div class="content_1">
          <div class="content_text">
            <img src="../../assets/img/variant_1.svg" alt="">
            <span>Почта России</span>
          </div>
          <div class="content_data">
            <div class="container_1">
              <span class="span_1">Сроки:</span><br>
              <span class="span_2">10-14 дней</span>
            </div>
            <div class="container_1">
              <span class="span_1">Стоимость доставки:</span><br>
              <span class="span_2">от £27.00</span>
            </div>
            <div class="container_1">
              <span class="span_1">Итого:</span><br>
              <span class="span_2 text">£41.99 <img src="../../assets/img/variant_icon.svg" alt="" class="img_i"></span>

            </div>

            <div class="container_1">
              <img class="img_vector" src="../../assets/img/Vector 7.svg" alt="">
            </div>
          </div>
        </div>
        <div class="content_1">
          <div class="content_text">
            <img src="../../assets/img/variant_2.svg" alt="">
            <span>EMS ПОЧТА РОССИЯ </span>
          </div>
          <div class="content_data">
            <div class="container_1">
              <span class="span_1">Сроки:</span><br>
              <span class="span_2">9-12 дней</span>
            </div>
            <div class="container_1">
              <span class="span_1">Стоимость доставки:</span><br>
              <span class="span_2">от £40.00</span>
            </div>
            <div class="container_1">
              <span class="span_1">Итого:</span><br>
              <span class="span_2 text">£54.55 <img src="../../assets/img/variant_icon.svg" alt="" class="img_i"></span>

            </div>

            <div class="container_1">
              <img class="img_vector" src="../../assets/img/Vector 7.svg" alt="">
            </div>
          </div>
        </div>


        <div class="content_1">
          <div class="content_text">
            <img src="../../assets/img/variant_3.svg" alt="">
            <span>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</span>
          </div>
          <div class="content_data">
            <div class="container_1">
              <span class="span_1">Сроки:</span><br>
              <span class="span_2">10-14 дней</span>
            </div>
            <div class="container_1">
              <span class="span_1">Стоимость доставки:</span><br>
              <span class="span_2">от £13.00</span>
            </div>
            <div class="container_1">
              <span class="span_1">Итого:</span><br>
              <span class="span_2 text">£90.50 <img src="../../assets/img/variant_icon.svg" alt="" class="img_i"></span>

            </div>

            <div class="container_1">
              <img class="img_vector" src="../../assets/img/Vector 7.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#variant {
  margin: 0 auto;
  width: 1400px;
  height: 438px;
  margin-bottom: 170px;
}

.variant_content {
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.content_1 {
  /* 5 */
  margin-top: 20px;
  background: #FFFFFF;
  box-shadow: 0px 0px 70px rgba(138, 138, 138, 0.1);
  border-radius: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content_data {
  display: flex;
  align-items: center;
}

.content_text {
  margin-left: 25px;
}

.content_text img {
  width: 52px;
  height: 52px;
}

.content_text span {
  padding-left: 25px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #1F2428;
}

.container_1 {
  padding-left: 27px;
  width: 159px;
  height: 82px;
  border-left: 1px solid #C0C9D7;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container_1 .span_1 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #222222;
}

.container_1 .span_2 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #222222;
}

.container_1 .img_vector {

  width: 14px;
  height: 7px;
}

.img_i {
  width: 16px;
  height: 16px;
  margin-left: 7px;
}

.text {
  display: flex;
  align-items: center;
}
</style>