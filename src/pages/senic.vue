<template>
<div class="index">


    <div class="sss">
 <!-- 头部的打开APP -->
   <headerview></headerview>

    <!-- 顶部带搜索框的部分 -->

    <search></search>
    <!-- 导航栏 -->
   <headerNav></headerNav>

    <!-- 旅游攻略 -->
    <stragety></stragety>


    <!-- 当地热门 -->
    <localhot></localhot>


    <!-- 特色菜 -->
    <specialgreen></specialgreen>


    <!-- 推荐住宿区域 -->
    <localhotel></localhotel>

    <!-- 热门路线 -->
    <hotline></hotline>






    <!-- 当地问答 -->
   <localquestion></localquestion>

    <!-- 经典行程 -->
    <specialline></specialline>


    <!-- 出行超市 -->
    <supermarket></supermarket>

    </div>
   <Footer></Footer>
</div>
</template>


<script>
import headerview from "../components/senic/headerview"
import Footer from "../components/ctrip/footer"
import search from "../components/senic/search"
import headerNav from "../components/senic/headerNav"
import stragety from "../components/senic/strategy"
import localhot from "../components/senic/localhot"
import specialgreen from "../components/senic/specialgreen"
import localhotel from "../components/senic/localhotel"
import hotline from "../components/senic/hotline"
import localquestion from "../components/senic/localquestion"
import specialline from "../components/senic/specialline"
import supermarket from "../components/senic/supermarket"
export default {
    components:{
        headerview,
        Footer,
        search,
        headerNav,
        stragety,
        localhot,
        specialgreen,
        localhotel,
        hotline,
        localquestion,
        specialline,
        supermarket
    }
}
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
</style>