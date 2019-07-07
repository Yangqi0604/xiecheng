<template>
  <div>
    <div class="gard-nav-hotel" v-for="items in indexdata">
      <a class="c_hotel" @click="$router.push('/cart')">
        <span>{{items.hotel}}</span>
      </a>
      <a class="c_hotel-inn">
        <span>{{items.innhotel}}</span>
      </a>
      <a class="c_hotel-package">
        <span class="grid-nav-jhj">
          <span class="grid-nav-wrd">{{items.wrd}}</span>
          <span class="grid-nav-item-tag">{{items.tag}}</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["indexdata"]
};
</script>





<style scoped>
.big_nav-entry {
  padding: 0.12rem;
  margin-top: -0.1rem;
}
.gard-nav-hotel {
  border-top-left-radius: 0.08rem;
  border-top-right-radius: 0.08rem;
  background: linear-gradient(to right, #fa5956, #fb8650 54%);
  height: 0.65rem;
}
.c_hotel {
  display: block;
  line-height: 65%;
  background: url(../../assets/grid-nav-items-hotel@v7.15.png) no-repeat right
    bottom;
  background-size: 0.73rem auto;
  width: 31%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_hotel > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}

.c_hotel-inn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(../../assets/grid-nav-items-minsu@v7.15.png) no-repeat left
    bottom;
  background-size: 0.37rem auto;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_hotel-inn > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_hotel-package {
  display: block;
  background: linear-gradient(to right, #ffbc49, #ffd252);
  padding: 0;
  width: 46%;
  height: 100%;
  float: left;
  border-top-right-radius: 0.08rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ffffff;
}
.grid-nav-jhj {
  line-height: 65%;
  height: 100%;
  display: block;
  background: url(../../assets/grid-nav-items-jhj@v7.15.png) no-repeat;
  background-size: 0.86rem auto;
  background-position: right bottom;
  position: relative;
}
.grid-nav-wrd {
  font-size: 0.14rem;
  color: #ffffff;
  display: flex;
  margin-left: 0.25rem;
}
.grid-nav-item-tag {
  display: block;
  color: #fff;
  height: 0.13rem;
  line-height: 0.13rem;
  font-size: 0.1008rem;
  background: #f54c45;
  border-radius: 0.07rem;
  border-bottom-left-radius: 0;
  position: absolute;
  padding: 0 0.05rem;
  top: 0.1rem;
  left: 0.65rem;
}

.grid-nav-flight {
  background: linear-gradient(to right, #4b8fed, #53bced);
  height: 0.65rem;
}
.c_flight {
  display: block;
  line-height: 65%;
  background: url(../../assets/grid-nav-items-flight@v7.15.png) no-repeat right
    bottom;
  background-size: 0.79rem auto;
  width: 31%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_flight > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_train_ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(../../assets/grid-nav-items-train.png) no-repeat left bottom;
  background-size: 0.37rem auto;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_train_ticket > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_bus_ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_bus_ticket > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_car {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_car > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}

.grid-nav-travel {
  background: linear-gradient(to right, #34c2aa, #6cd557);
  height: 0.65rem;
  border-bottom-left-radius: 0.08rem;
  border-bottom-right-radius: 0.08rem;
}
.c_vacation {
  display: block;
  line-height: 65%;
  background: url(../../assets/grid-nav-items-travel@v7.15.png) no-repeat right
    bottom;
  background-size: 0.94rem auto;
  width: 31%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_vacation > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_crh_travel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(../../assets/grid-nav-items-dingzhi@v7.15.png) no-repeat left
    bottom;
  background-size: 0.61rem auto;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_crh_travel > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_cruise {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  border-right: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_cruise > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
.c_custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  height: 100%;
  border-bottom: 0.01rem solid #ffffff;
  box-sizing: border-box;
  float: left;
}
.c_custom > span {
  font-size: 0.14rem;
  color: #ffffff;
  display: block;
  margin-left: 0.1rem;
}
</style>