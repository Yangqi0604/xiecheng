<template>
    <div>
            <div class="localhot_special">
        <div class="place_top">
            <span>推荐住宿区域</span>
        </div>
        <!-- 图文部分 -->
        <div class="cb_body_btcontent">
            <div class="icon_bigbox">
                <div class="icon_pic">
                    <div class="icon_img-top">
                        <img src="img/2.png" alt="">
                    </div>
                    <div class="icon_img-txt">
                        <p class="ct_txt">日本名古屋5日自由行·网红摘草blue＇dge 空中酒吧 在城市之上享受温情浪漫|人气名古屋4晚连住|战国三雄故乡 游日本中部高山古街 走进白川乡秘境|享受一份江户时代流传下来的闲适与细致
                        </p>
                        <div class="hangban">
                            <span>4钻</span>
                        </div>
                        <div class="txtBox">
                            <div class="sale_price">
                                <span class="onetxt">5804人出游</span>
                            </div>
                            <div class="sale_price">
                                <dfn>￥</dfn>
                                <span>2702</span>
                                <p>起</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="place_bottom">
            <a href="">查看全部路线</a>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>



<style scoped>
    /* 推荐住宿区域 */
    .place_top {
    text-align: center;
    /* padding: 0 .1rem; */
}
.place_top>span {
    display: block;
    font-size: .17rem;
    height: .5rem;
    line-height: .5rem;
}
    .localhot_special{
    padding: 0 .1rem;
    background: #FFF;
    margin-top: .1rem;
}
.icon_pic{
    display: flex;
    justify-content: space-between;
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
.hangban>span{
    display: block;
    width: .2rem;
    height: .15rem;
    color: #ff922d;
    border: 1px solid #ff922d;
}
.sale_price{
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: .22rem;
}
.sale_price>dfn{
    font-style: normal;
    display: block;
    font-size: .12rem;
    margin-top: .05rem; 
    color: #ff6913;
}
.txtBox{
    width: 2rem;
    display: flex;
    justify-content: space-between;
}
.sale_price>span{
    display: block;
    font-size: .17rem;
    color: #ff6913;
}
.sale_price>.onetxt{
    font-size: .12rem;
    color: #333333;
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
.place_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.01rem solid #cccccc;
}
.place_bottom>a {
    height: .47rem;
    font-size: .15rem;
    line-height: .47rem;
    color: #0099f7;
}
</style>