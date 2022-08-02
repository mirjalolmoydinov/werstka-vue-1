<template>
  <div id="footer">
    <b-container>
      <div class="container_1">
        <div class="content_1">
          <img src="../assets/img/logo.svg" alt="">
          <div class="div">
            <img src="../assets/img/tow_4_1.svg" alt="">
            <img src="../assets/img/tow_4_2.svg" alt="">
            <img src="../assets/img/tow_4_3.svg" alt="">
          </div>
        </div>
        <div class="content_2">
          <p class="p_1">О компании</p>
          <p class="p_2">Услуги</p>
          <p class="p_2">Цены</p>
          <p class="p_2">Отзывы</p>
          <p class="p_2">Контакты</p>
          <p class="p_2">Вакансии</p>
          <p class="p_2">Соглашение о персональных данных</p>
          <p class="p_2">Условия использования</p>
        </div>
        <div class="content_3">
          <p class="p_1">Полезное</p>
          <p class="p_2">Как работает наш сервис</p>
          <p class="p_2">Как покупать с оператором</p>
          <p class="p_2">Ответы на частые вопросы</p>
          <p class="p_2">Популярные магазины</p>
          <p class="p_2">Черный список магазинов</p>
          <p class="p_2">Актуальные распродажи</p>
        </div>
        <div class="content_4">
          <p class="p_1">Спецпроекты</p>
          <p class="p_2">50% на первую доставку</p>
          <p class="p_2">Скидки для постоянных клиентов</p>
          <p class="p_2">Реферальная программа</p>
          <p class="p_2">Кэшбек Mr. Rebates и Rakuten</p>
          <p class="p_2">Stop Fraud</p>
        </div>
      </div>
      <div class="container_2">
        <p>© 2021 Okeypost . Все права защищены.</p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container_1 {
  margin-top: 84px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.content_1 img {
  width: 190px;
  height: 48px;
}

.p_1 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #1F2428;
}

.content_3,
.content_4,
.content_2 .p_2 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #1F2428;
}

.div {
  display: flex;
  column-gap: 9px;
  margin-top: 34px;
}

.div img {
  width: 46px;
  height: 46px;
}

.container_2 {
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px solid #C0C9D7;
  padding-top: 36px;
  padding-bottom: 33px;
}
</style>