<template>
  <div id="forma_component_1">
    <b-container>
      <div class="forma_1">
        <div class="forma_2">
          <div class="strana_menu_1">
            <div class="strana_menu_1_1">
              <p>Страна:</p>
            </div>
            <div class="strana_menu_1_2">
              <img src="../../assets/img/form_1.svg" alt="" class="img_1">
              <span class="form_p">Россия</span>
              <img class="img_form_1" src="../../assets/img/Vector 7.svg" alt="">
            </div>
          </div>
          <div class="strana_menu_1">
            <div class="strana_menu_1_1">
              <p>Город:</p>
            </div>
            <div class="strana_menu_1_2">
              <img src="../../assets/img/form_1.svg" alt="" class="img_1">
              <span class="form_p">Москва</span>
            </div>
          </div>
          <div class="strana_menu_1">
            <div class="strana_menu_1_1">
              <p>Индекс:</p>
            </div>
            <div class="strana_menu_1_2">
              <img src="../../assets/img/form_1.svg" alt="" class="img_1">
              <span class="form_p">Введите индекс</span>
            </div>
          </div>
          <div class="strana_menu_1">
            <div class="strana_menu_1_1">
              <p>Вес посылки:</p>
            </div>
            <div class="strana_menu_1_2">
              <img src="../../assets/img/form_1.svg" alt="" class="img_1">
              <span class="form_p">0,5</span>
            </div>
          </div>
          <div class="strana_menu_1">
            <div class="strana_menu_1_1">
              <p>Дополнительные услуги:</p>
            </div>
            <div class="strana_menu_1_2">
              <img src="../../assets/img/form_1.svg" alt="" class="img_1">
              <span class="form_p">Выберите услуги</span>
              <img class="img_form_2" src="../../assets/img/Vector 7.svg" alt="">

            </div>
            <span></span>
          </div>
        </div>
        <div> <button class="btn_form"> Рассчитать</button></div>

      </div>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#forma_component_1 {
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 80px;

}

.forma_1 {
  max-width: 1400px;
  height: 270px;
  background: #FFFFFF;
  box-shadow: 0px 0px 70px rgba(138, 138, 138, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 35px;
}

.forma_2 {
  width: 100%;
  height: auto;
  display: flex;
  margin: 0 auto;
}

.strana_menu_1 {
  width: 246px;
  height: 75px;
  padding-bottom: 20px;

}

.strana_menu_1_1 p {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #222222;
}

.strana_menu_1_2 {
  display: flex;
  align-items: center;
}

.strana_menu_1_2 .img_1 {
  width: 26px;
  height: 26px;
  display: inline-block;
}

.strana_menu_1_2 .img_form_2 {
  width: 10px;
  height: 5px;
  margin-left: 30px;
  display: inline-block;

}

.strana_menu_1_2 .img_form_1 {
  width: 10px;
  height: 5px;
  margin-left: 100px;
}

.form_p {
  margin-left: 15px;
}

.btn_form {
  margin-top: 32px;
  height: 66px;
  background: linear-gradient(90deg, #00C97B 0%, #00D981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
  border: none;
  width: 240px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  align-items: center;
}
</style>