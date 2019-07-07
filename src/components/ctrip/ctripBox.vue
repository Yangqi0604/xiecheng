<template>
  <div class="ctripBox">
    <traveltype :ctripdata="ctripdata.free"></traveltype>
    <!-- 限时秒杀 -->
    <cmBodyItem :ctripdata="ctripdata"></cmBodyItem>
    <!-- 照片盒子 -->
    <picContent :ctripdata="ctripdata.img" ></picContent>
    <!-- 图片横向滚动 -->
    <cbBodyBtcontent :ctripdata="ctripdata"></cbBodyBtcontent>
    <!-- 一堆按钮 -->
    <someIcon :ctripdata="ctripdata.local"></someIcon>
    <!-- 最后加载的列表 -->
    <someList :ctripdata="ctripdata"></someList>
    <!-- moreList更多详细信息按钮 -->
    <moreListButton></moreListButton>
    <!-- 右边的固定图标 -->
    <fixedIcon></fixedIcon>
  </div>
</template>





<script>
import traveltype from "./traveltype"
import cmBodyItem from "./cm-body-item"
import picContent from "./pic_content"
import cbBodyBtcontent from "./cb_body_btcontent"
import someIcon from "./someIcon"
import someList from "./someList"
import fixedIcon from "./fixedicon"
import moreListButton from "./moreListButton"
export default {
  components: {
    traveltype,
    cmBodyItem,
    picContent,
    cbBodyBtcontent,
    someIcon,
    someList,
    fixedIcon,
    moreListButton,
  },
  props:["ctripdata"],
};
</script>



<style scoped>
.ctripBox{
  flex: 1;
  overflow-y: auto;
}
</style>