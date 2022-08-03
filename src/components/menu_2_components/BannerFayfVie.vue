<template>
  <b-container>
    <div id="banner_fayf">
      <div id="content_1">
        <p class="text">Отзывы и цитаты блогеров:</p>
      </div>
      <div id="content_2" class="grid2x2">
        <div class="box box1">
          <div class="img_box">
            <img src="../../assets/img/coment_1.svg" alt="">
          </div>
          <div class="box_2">
            <div>
              <p class="nik">NIKOLAY S</p>
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <p class="nik_2">Ваша доставка самая быстрая и дешёвая!!!</p>
            </div>
            <div>
              <p class="span"><span>Дата:</span>16 Ноября 2021</p>
              <p class="span"><span>Город:</span>Санкт-Петербург</p>
            </div>
          </div>

        </div>
        <div class="box box1">
          <div class="img_box">
            <img src="../../assets/img/coment_2.svg" alt="">
          </div>
          <div class="box_2">
            <div>
              <p class="nik">NIKOLAY S</p>
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <p class="nik_2">Ваша доставка самая быстрая и дешёвая!!!</p>
            </div>
            <div>
              <p class="span"><span>Дата:</span>16 Ноября 2021</p>
              <p class="span"><span>Город:</span>Санкт-Петербург</p>
            </div>
          </div>

        </div>
        <div class="box box1">
          <div class="img_box">
            <img src="../../assets/img/coment_3.svg" alt="">
          </div>
          <div class="box_2">
            <div>
              <p class="nik">NIKOLAY S</p>
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <p class="nik_2">Ваша доставка самая быстрая и дешёвая!!!</p>
            </div>
            <div>
              <p class="span"><span>Дата:</span>16 Ноября 2021</p>
              <p class="span"><span>Город:</span>Санкт-Петербург</p>
            </div>
          </div>

        </div>
        <div class="box box1">
          <div class="img_box">
            <img src="../../assets/img/coment_4.svg" alt="">
          </div>
          <div class="box_2">
            <div>
              <p class="nik">NIKOLAY S</p>
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <img class="stark" src="../../assets/img/coment_start.svg" alt="">
              <p class="nik_2">Ваша доставка самая быстрая и дешёвая!!!</p>
            </div>
            <div>
              <p class="span"><span>Дата:</span>16 Ноября 2021</p>
              <p class="span"><span>Город:</span>Санкт-Петербург</p>
            </div>
          </div>

        </div>
      </div>
      <div id="content_3"><button class="btn"> Все отзывы</button></div>
    </div>

  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
#banner_fayf {
  width: 1400px;
  height: 752px;
}

.text {
  width: 651px;
  height: 56px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 56px;
  color: #1F2428;
}

.btn {
  width: 240px;
  height: 66px;
  background: linear-gradient(90deg, #00C97B 0%, #00D981 96.96%);
  box-shadow: 0px 4px 4px rgba(1, 203, 124, 0.2);
  border-radius: 36px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
}

.grid2x2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.grid2x2>div {
  display: flex;
  flex-basis: calc(50% - 40px);
  /* justify-content: center;
  flex-direction: column; */
  width: 685px;
  height: 260px;
  background: #FFFFFF;
  box-shadow: 0px 0px 70px rgba(138, 138, 138, 0.1);
  border-radius: 16px;

}

/* 
.grid2x2>div>div {
  display: flex;
  justify-content: center;
  flex-direction: row;
} */

.box {
  margin: 20px;
  display: flex;
}

.box_2 {
  display: flex;
  flex-direction: column;
  /* align-items:flex-start; */
  margin-left: 38px;
}

.img_box {
  width: 240px;
  height: 240px;
}

.img_box img {
  width: 240px;
  height: 240px;
  border-radius: 8px;
}

.stark {
  width: 16px;
  height: 16px;
}

.box1 {
  padding: 10px;
  background-color: red;
  display: flex;
  /* justify-content:center; */
  flex-direction: row;
  align-items: end;
}

.box2 {
  background-color: orange;
}

.box3 {
  background-color: purple;
}

.box4 {
  background-color: grey;
}

.nik {

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #1F2428;
}

.nik_2 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  /* line-height: 26px; */
  color: #1F2428;
}

.span span {

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #1F2428;
}

.span {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #1F2428;
}
</style>