<template>
    <div>
        <div class="icon_bigbox" v-for="items in ctripdata">
            <div class="icon_pic">
                <div class="icon_img-top">
                    <img :src=items.img alt>
                    <div class="one">
                        <span class="ctrip_frew">{{items.frew}}</span>
                        <span class="ctrip_add">{{items.add}}</span>
                    </div>
                </div>
                <div class="icon_img-txt">
                    <p class="ct_txt">
                        {{items.p}}
                    </p>
                    <div class="hangban">
                        <span>{{items.ban}}</span>
                    </div>
                    <div class="sale_price">
                        <dfn>{{items.dfn}}</dfn>
                        <span>{{items.year}}</span>
                        <p>{{items.start}}</p>
                        <i>{{items.i}}</i>
                    </div>
                </div>
            </div>
            <div class="item_bottom">
                <div class="item_bottombox">
                    <i class="hui">{{items.hui}}</i>
                    <span>{{items.span}}</span>
                </div>
            </div>
            <!-- <iconPic :ctripdata="ctripdata"></iconPic>
            <itemBottom :ctripdata="ctripdata.discounts"></itemBottom> -->
        </div>
    </div>
</template>

<script>
export default {
    props:["ctripdata"]
}
</script>



<style scoped>
    .cm-banks-item{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
}
.cm-bank-left{
    display: flex;
    height: .48rem;
    align-items: center;
    padding-left: .1rem; 
}
.tipf_pic{
    background:url(../../assets/icon4.png)no-repeat;
    display:block;
    height: .19rem;
    width: .19rem;
    background-size: .19rem auto;
    margin-bottom: -.03rem;
    margin-right: .03rem;
}
.icon_pic{
    display: flex;
    justify-content: space-between;
    padding: 0 .1rem;
}
.icon_img-top{
    position: relative;
}
.one{
    position: absolute;
    left: 0;
    top: .10rem;
    display: flex;
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
.icon_img-top>img{
    width: 1.3rem;
    height: 0.9rem;
    border-radius: .03rem .03rem 0 0;
    border-radius: .05rem;
    margin-top: .1rem;
}
.ct_txt{
    display: block;
    font-size: .14rem;
    line-height: .16rem;
    height: .32rem;
    width: 2rem;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin:0.06rem .05rem;
    color: #222;
    font-family: Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei
}
.icon_img-txt{
    margin-left: .05rem;
    border-bottom: .01rem solid #eaeaea;
    padding-top: .06rem;
}
.hangban{
    display: block;
    font-size: .12rem;
    margin-left: .05rem;
    color: #999;
}
.sale_price{
    display: flex;
    align-items: center;
    margin-left: .05rem;
    margin-top: .23rem;
}
.sale_price>dfn{
    font-style: normal;
    display: block;
    font-size: .12rem;
    margin-top: .05rem; 
    color: #ff6913;
}
.sale_price>span{
    display: block;
    font-size: .17rem;
    color: #ff6913;
}
.sale_price>p{
    display: block;
    font-size: .13rem;
    margin-top: .035rem; 
    color: #999;
}
.sale_price>i{
    display: block;
    font-size: .1rem;
    width: .34rem;
    height: .18rem;
    line-height: .18rem;
    border-radius: .09rem;
    border: .01rem solid #ccc;
    padding-left: .12rem;
    margin-left: .8rem;
    font-style: normal;
}
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
.tips_txt{
    display: block;
    font-size: .17rem;
    font-weight: 600;
    color: #ff4646;
}
</style>