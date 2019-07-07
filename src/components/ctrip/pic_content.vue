<template>
<div>
    <div class="pic_content" v-for="items in ctripdata">
        <div class="adbox_left">
            <img :src=items.pic1 alt>
        </div>
        <div class="adbox_right">
            <img :src=items.pic2 alt>
        </div>
    </div>
</div>
</template>



<script>
export default {
    data() {
        return {
            
        }
    },
    props:["ctripdata"],
}
</script>


<style scoped>
    .pic_content{
    display: flex;
    justify-content: space-between;
    padding:0 .13rem;
}
.adbox_left{
    overflow: hidden;
    float: left;
    width: 49%;
    position: relative;
}
.adbox_left>img{
    width: 100%;
    height: auto;
    vertical-align: middle;
    margin-right: .015rem;
}
.adbox_right{
    overflow: hidden;
    float: left;
    width: 49%;
    position: relative;
}
.adbox_right>img{
    width: 100%;
    height: auto;
    vertical-align: middle;
    margin-left: .015rem;
}
</style>