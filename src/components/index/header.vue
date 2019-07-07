<template>
  <div>
    <div id="header">
      <swiperContainer :indexdata="indexdata.picture"></swiperContainer>

      <div class="svg"></div>
      <headerNav :indexdata="indexdata.list"></headerNav>
    </div>
  </div>
</template>


<script>
import swiperContainer from "./swiper-container";
import headerNav from "./header-nav";
export default {
  components: {
    swiperContainer,
    headerNav
  },
  props: ["indexdata"]
};
</script>




<style scoped>
#header {
  width: 100%;
  height: 2.2rem;
  position: relative;
}
.svg {
  z-index: 9;
  width: 100%;
  height: 0.4rem;
  background: url(../../assets/bg.png);
  background-size: 100% 100%;
  position: absolute;
  top: 1.6rem;
}
#header > .header-top > .search-index-box > span:after {
  position: absolute;
  top: 0.08rem;
  left: 0.1rem;
  width: 0.35rem;
  height: 0.35rem;
  overflow: hidden;
  background: url(../../assets/home-common-sprite2x@v7.15.png) no-repeat;
  background-size: 0.21rem auto;
  background-position: 0.15rem 0.07rem;
  content: "";
}
#header > .header-top > .search-index-box > span {
  display: flex;
  font-size: 0.15rem;
  color: #666666;
}
#header > .header-top > .search-index-right > span {
  display: flex;
  font-size: 0.12rem;
  color: #ffffff;
  text-align: center;
}
</style>