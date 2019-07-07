<template>
     <div class="cm-body-item">
      
    <cmBankItem :ctripdata="ctripdata.times"></cmBankItem>
    <picbigbox :ctripdata="ctripdata.freewalk"></picbigbox>
    </div>
</template>



<script>
import picbigbox from "./cm-body-item-cm_picbigbox"
import cmBankItem from "./cm-body-item-cm-bank-item"
export default {
    components:{
        picbigbox,
        cmBankItem
    },
    props:["ctripdata"]
}
</script>

<style scoped>
.cm-bank-left{
    display: flex;
    height: .48rem;
    align-items: center;
    padding-left: .15rem; 
}
.tips_picone{
    background:url(../../assets/icon1.png)no-repeat;
    display:block;
    height: .19rem;
    width: .19rem;
    background-size: .19rem auto;
    margin-bottom: -.03rem;
    margin-right: .03rem;
}
.tips_saletone{
    color: #999;
    font-size: .12rem;
    line-height: .12rem;
    padding-left: .02rem;
    padding-right: .03rem;
    vertical-align: middle;
    display: block;
    margin-top: .06rem;
}
.icon_img-tops{
    position: relative;
    padding: .001rem;
    width: 1.5rem;
    height: 1.7rem;
    background: #fff;
    margin-right: .1rem;
}
.ones{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
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
 .cm-bank-item{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    margin-top: .08rem;
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
.tips_txt{
    display: block;
    font-size: .17rem;
    font-weight: 600;
    color: #ff4646;
}
.tips_salet{
    color: #999;
    font-size: .12rem;
    line-height: .12rem;
    padding-left: .02rem;
    padding-right: .03rem;
    vertical-align: middle;
    display: block;
    margin-top: .08rem;
}
.cm-bank-right{
    display: flex;
    align-items: center;
    padding-right: .1rem;
    position: relative;
}
.cm-bank-rs{
    float: right;
    line-height: .18rem;
    padding-right: .24rem;
    font-size: .12rem;
    color: #999;
}
.cm-bank-rs::after {
    content: "";
    position: absolute;
    right: .24rem;
    top: .205rem;
    display: inline-block;
    width: .07rem;
    height: .07rem;
    vertical-align: middle;
    border-left: .01rem solid #999;
    border-bottom:.01rem solid #999;
    transform: rotate(-135deg);
    margin-left: .05rem;
    box-sizing: border-box;
}
.cm-bank-right>span{
    display: block;
    font-size:.12rem;
}
.tit{
    display: block;
    font-size: .24rem;
    color: #333;
    line-height: .26rem;
    font-weight: 400;
    margin-right: .06rem;
    margin-top: .02rem;
}
.num {
    display: block;
    font-style: normal;
    background-color: #666;
    border-radius: .03rem;
    width: .15rem;
    height: .15rem;
    line-height: .15rem;
    color: #fff;
    text-align: center;
    font-size: .12rem;
    margin: 0 .02rem;
}

</style>