<template>
  <div id="content_qiz">
    <b-container style="max-width:1800px;color:white;">
      <b-card no-body class="overflow-hidden" style="background:linear-gradient(79.63deg, #5B52A3 1.08%, #40B8EA 100%);
border-radius: 36px; max-width: 1800px;padding-top:40px;padding-bottom: 40px;padding-left: 40px;">
        <b-row class=" d-flex align-items-center justify-content-center">
          <b-col md="10">
            <b-card-body class="card_body">
              <h3>Остались вопросы? Спросите нас в соцсетях!</h3>
              <div class="div">
                <img src="../../assets/img/tow_3_1.svg" alt="">
                <img src="../../assets/img/tow_3_2.svg" alt="">
                <img src="../../assets/img/tow_3_3.svg" alt="">
              </div>
              
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
#content_qiz{
  margin-top: 160px;
  margin-bottom: 14px;
}
.card_body{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.div{
  display: flex;
  column-gap: 9px;
}
.div img{
  width: 66px;
height: 66px;
}

</style>
