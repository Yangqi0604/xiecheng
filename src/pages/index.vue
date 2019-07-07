<template>
  <div class="index">
    <headerTop></headerTop>
    <div class="sss">
      <Headerview :indexdata="indexdata"></Headerview>

      <!-- big导航模块 -->
      <bigNavEntry :indexdata="indexdata"></bigNavEntry>

      <!-- 一堆图标按钮 -->
      <listIcon :indexdata="indexdata.icon"></listIcon>

      <!-- 特卖板块 -->
      <salesBox :indexdata="indexdata"></salesBox>

      <!-- 热门活动 -->

      <hotEvent :indexdata="indexdata.picone"></hotEvent>
      <!-- 底部导航 -->

      <footerTolist :indexdata="indexdata.footlist"></footerTolist>
      <!-- 注册信息 -->
      <toolVer></toolVer>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import headerTop from "../components/index/header-header_top";
import Headerview from "../components/index/header";
import bigNavEntry from "../components/index/big_nav-entry";
import listIcon from "../components/index/listicon";
import salesBox from "../components/index/sales_box";
import Footer from "../components/ctrip/footer";
import hotEvent from "../components/index/hotEvent";
import footerTolist from "../components/index/footer_tolist";
import toolVer from "../components/index/toolVer";
export default {
  components: {
    Headerview,
    bigNavEntry,
    listIcon,
    salesBox,
    Footer,
    headerTop,
    hotEvent,
    footerTolist,
    toolVer
  },
  data() {
    return {
      indexdata: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("http://localhost:3000/goods/index").then(res => {
        this.indexdata = res.data;
      });
    }
  }
};
</script>


<style scoped>
.index {
  /* padding-bottom: .42rem; */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sss {
  flex: 1;
  overflow-y: auto;
}
.mint-indicator-wrapper {
  height: 0.5rem;
}
</style>