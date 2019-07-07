<template>
<div>
    <div class="item_bottom" v-for="items in ctripdata">
        <div class="item_bottombox">
            <i class="hui">{{items.hui}}</i>
            <span>{{items.span}}</span>
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
.item_bottom{
    width: 100%;
    height: .4rem;
    z-index: 78;
    border-bottom: 1px solid #eaeaea;
    line-height: .4rem;
}
.item_bottombox{
    display: flex;
    align-items: center;
    padding:0 .08rem 0;
}
.hui{
    display: block;
    font-size: .12rem;
    font-style: normal;
    width: .15rem;
    height: .15rem;
    text-align: center;
    line-height: .15rem;
    border-radius: 0.025rem;
    background: #ff4646;
    margin-left: .1rem;
    color: #fff;
}
.item_bottombox>span{
    display: block;
    font-size: .12rem;
    margin-left: .04rem;
    color: #999;
}
</style>