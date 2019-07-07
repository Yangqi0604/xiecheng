<template>
    <div class="cm_picbigbox">
        <div class="cm_picbox" v-for="items in ctripdata">
          <div class="icon_img-tops">
            <img src="../../assets/2.png" alt>
            <div class="ones">
              <span class="ctrip_frew">{{items.title}}</span>
              <span class="ctrip_add">{{items.go}}</span>
            </div>
            <p class="ct_txts">
              {{items.ctTxts}}
            </p>
            <div class="sales_price">
              <dfn>￥</dfn>
              <span>{{items.Price}}</span>
              <p>起</p>
            </div>
            <div class="fastgo">
              <span class="quicklygo">马上抢</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    props:["ctripdata"]
}
</script>


<style scoped>
.ones{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
}
.icon_img-tops{
    position: relative;
    padding: .001rem;
    width: 1.5rem;
    height: 1.7rem;
    background: #fff;
    margin-right: .1rem;
}
.ct_txts{
    display: block;
    font-size: .14rem;
    line-height: .16rem;
    height: .32rem;
    width: 1.4rem;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* margin: 0.05rem 0; */
    text-align: center;
    color: #222;
    /* margin-left: .1rem; */
    font-family: Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei
}
.cm_picbigbox{
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    padding: 0 .15rem .4rem;
}
.cm_picbox{
    flex-shrink: 0;
    display: flex;
}
.icon_img-tops>img{
    width: 1.5rem;
    height: 1rem;
    border-radius: .05rem;
    margin: 0 auto;
    /* margin-top: .1rem; */
}
.sales_price{
    display: flex;
    align-items: center;
    /* margin-left: .3rem;
    margin-left: .1rem; */
}
.sales_price>dfn{
    font-style: normal;
    display: block;
    font-size: .11rem;
    margin-top: 0rem; 
    color: #ff6913;
}
.sales_price>span{
    display: block;
    font-size: .16rem;
    color: #ff6913;
}
.sales_price>p{
    display: block;
    font-size: .12rem;
    margin-top: 0rem; 
    color: #999;
}
.fastgo{
    width: 100%;
    height: 0.28rem;
    background: #ff4646;
    display: flex;
    justify-content: center;
    align-items: center;
}
.quicklygo{
    display: block;
    font-size: .14rem;
    color: #fff;
}
.ctrip_frew{
    width: .3rem;
    display: block;
    font-size: .1rem;
    background-color: #ff716d;
    padding: .02rem .03rem .01rem .04rem;
    line-height: 1;
    position: relative;
}
.ctrip_frew::after {
    content: "";
    border-style: solid;
    border-width: .12rem .08rem 0 0;
    border-color: #ff716d transparent transparent transparent;
    position: absolute;
    right: -.07rem;
    z-index: 2;
    top: 0;
}
.ctrip_add{
    display: block;
    font-size: .1rem;
    width: .4rem;
    padding: .01rem .03rem .01rem .07rem;
    line-height: 1;
    position: relative;
    background: rgba(0,0,0,.5);
    left: 0;
}
.ctrip_add::before {
    content: "";
    border-style: solid;
    border-width: .12rem .08rem 0 0;
    border-color: rgba(0,0,0,.5) transparent transparent transparent;
    position: absolute;
    right: -.08rem;
    top: 0;
}
</style>