<template>
  <div id="byukbritanya">
    <b-container>
      <div class="container_text">
        <p>4 простых шага для ваших покупок в Великобритании</p>
      </div>
      <div class="container_card">
        <div>
          <b-card-group deck>
            <b-card
              title="вы ВЫБИРАЕТЕ ТОВАР"
              :img-src="require('../../assets/img/britan_1.svg')"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                в английском магазине, оплачиваете и указываете адрес склада
                OkeyPost
              </b-card-text>
            </b-card>

            <b-card
              title="ПОКУПКИ ПРИХОДЯТ НА СКЛАД"
              :img-src="require('../../assets/img/britan_2.svg')"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                и появляются в вашем личном кабинете на нашем сайте
              </b-card-text>
            </b-card>

            <b-card
              title="ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ"
              :img-src="require('../../assets/img/britan_1.svg')"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                в надежной упаковке, по выгодной цене и очень быстро
              </b-card-text>
            </b-card>
            <b-card
              title="ЗАБИРАЕТЕ свою ПОСЫЛКУ"
              :img-src="require('../../assets/img/britan_1.svg')"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                в пункте выдачи, на почте или с курьером
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <div class="container_text_2">
        <p>
          Не хотите разбираться самостоятельно, наши мастера шопинга с радостью
          купят все товары за вас.
        </p>
      </div>
      <div class="container_btun">
        <b-button>Быстрая покупка</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kol: "../../assets/img/britan_1.svg",
    };
  },
};
</script>

<style>
#byukbritanya {
  width: 1353px;
  height: 755px;
  margin: 0 auto;
  background: yellow;
}

.container_text p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 56px;
  color: #1f2428;
  width: 695px;
  height: 112px;
}

.container_text_2 {
  width: 760px;
  height: 72px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 36px;
  color: #1f2428;
}

.container_btun button {
  width: 240px;
  height: 66px;
  background: linear-gradient(90deg, #00c97b 0%, #00d981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
  border: none;
}
</style>