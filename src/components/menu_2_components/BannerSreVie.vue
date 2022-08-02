<template>
  <div id="byukbritanya">
    <b-container >
      <div class="container_card">
          <b-card-group deck class="card_b">
            <b-card class="card_b_b" :img-src="require('../../assets/img/mm_2.svg')" img-alt="Image" img-left>
              <b-card-text class="card_text">
                <h1 class="h1" style="border-right:1px solid black; display:inline-block; padding-right: 46px;">01</h1>
                <span class="span">Получаем адрес для покупок в магазинах Великобритании </span><br>
                <span class="span_2">
                  Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в
                  нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать
                  при оформлении заказов в интернет-магазинах.
                </span>

              </b-card-text>
            </b-card>

            <b-card class="card_b_b" :img-src="require('../../assets/img/mm_3.svg')" img-alt="Image" img-left>
              <b-card-text class="card_text">
                <h1 class="h1" style="border-right:1px solid black; display:inline-block; padding-right: 46px;">02</h1>
                <span class="span">Получаем адрес для покупок в магазинах Великобритании </span><br>
                <span class="span_2">
                  Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в
                  нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать
                  при оформлении заказов в интернет-магазинах.
                </span>

              </b-card-text>
            </b-card>

            <b-card class="card_b_b" :img-src="require('../../assets/img/mm_4.svg')" img-alt="Image" img-left>
              <b-card-text class="card_text">
                <h1 class="h1" style="border-right:1px solid black; display:inline-block; padding-right: 46px;">03</h1>
                <span class="span">Получаем адрес для покупок в магазинах Великобритании </span><br>
                <span class="span_2">
                  Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в
                  нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать
                  при оформлении заказов в интернет-магазинах.
                </span>

              </b-card-text>
            </b-card>
            <b-card class="card_b_b" :img-src="require('../../assets/img/mm_5.svg')" img-alt="Image" img-left>
              <b-card-text class="card_text">
                <h1 class="h1" style="border-right:1px solid black; display:inline-block; padding-right: 46px;">04</h1>
                <span class="span">Получаем адрес для покупок в магазинах Великобритании </span><br>
                <span class="span_2">
                  Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в
                  нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать
                  при оформлении заказов в интернет-магазинах.
                </span>

              </b-card-text>
            </b-card>
            <b-card class="card_b_b" :img-src="require('../../assets/img/mm_6.svg')" img-alt="Image" img-left>
              <b-card-text class="card_text">
                <h1 class="h1" style="border-right:1px solid black; display:inline-block; padding-right: 46px;">05</h1>
                <span class="span">Получаем адрес для покупок в магазинах Великобритании </span><br>
                <span class="span_2">
                  Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в
                  нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать
                  при оформлении заказов в интернет-магазинах.
                </span>

              </b-card-text>
            </b-card>
          </b-card-group>
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

<style scoped>
img.card-img-left {
  height: 300px !important;
  width: 300px !important;
}

.card_text {
  padding-left: 71px;
}

#byukbritanya {
  width: 100%;
  margin: 0 auto;
  height: auto;
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
  margin-top: 30px;
  width: 240px;
  height: 66px;
  background: linear-gradient(90deg, #00c97b 0%, #00d981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
  border: none;
}

.card_b {
  display: flex;
  flex-direction: column;
}

.card_b_b {
  border: none !important;
  width: 100%;
  margin-top: 86px;
}

.h1 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 56px;
  color: #01CD7D;
}

.span {
  width: 353px !important;
  height: 72px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 36px;
  color: #1F2428;
  padding-left: 33px;
  display: inline-block;
}

.span_2 {

  width: 1029px;
  height: 108px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 36px;
  color: #1F2428;
}
</style>