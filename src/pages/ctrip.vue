<template>
  <div class="ctrip">
    <!-- header -->
    <headerview></headerview>
    <!-- 顶部导航 -->
    <ctripBox :ctripdata="ctripdata"></ctripBox>
    <!-- 底部导航 -->
    <Footer :ctripdata="ctripdata.footer"></Footer>
  </div>
</template>





<script>
import headerview from "../components/ctrip/header";
import Footer from "../components/ctrip/footer";
import ctripBox from "../components/ctrip/ctripBox";
export default {
  components: {
    headerview,
    ctripBox,
    Footer
  },
  data() {
    return {
      ctripdata: ""
    };
  },
  created() {
    this.$axios("http://localhost:3000/goods/ctrip").then(res => {
      this.ctripdata = res.data;
    });
  }
};
</script>



<style scoped>
.ctrip {
  /* padding-bottom: .42rem; */
  display: flex;
  flex-direction: column;
  height: 100%;
}
.mint-indicator-wrapper {
  height: 0.5rem;
}
</style>