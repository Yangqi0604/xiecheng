<template>
<div>
    <div class="sales_box">
        <div class="sales_hd">
            <span class="sales_hd-left sales-huodong">
        </span>
            <a class="sales_hd-right sales-huodong_fuli ">
            获取更多福利
        </a>
        </div>
        <div class="js-activity-list" v-for="items in indexdata">
            <a href="" class="js-activity-list_box">
            <img :src=items.pic1 alt="">
        </a>
        <a href="" class="js-activity-list_box" >
            <img :src=items.pic2 alt="">
        </a>
            <a href="" class="js-activity-little_box">
            <img :src=items.pic3 alt="">
        </a>
            <a href="" class="js-activity-little_box">
            <img :src=items.pic4 alt="">
        </a>
            <a href="" class="js-activity-little_box">
            <img :src=items.pic5 alt="">
        </a>
            <a href="" class="js-activity-little_box">
            <img :src=items.pic6 alt="">
        </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
props:["indexdata"]    

}
</script>



<style scoped>
.sales_hd{
	width: 100%;
	height: .44rem;
	border-top: .01rem solid #dbdbdd;
	position: relative;
	background: #ffffff;
}
.sales_hd-left{
	content: '';
    display: inline-block;
    position: absolute;
    left: .18rem;
    top: 50%;
    width: .79rem;
    height: .15rem;
    background: url(../../assets/un_home_text.png) no-repeat;
    background-size: .79rem auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.sales_hd-right{
	background: linear-gradient(to right,#ff4e63,#ff6cc9);
	content: '';
	position: absolute;
    right: .08rem;
    top: .11rem;
	display: inline-block;
	width: .42rem;
    height: .2rem;
    line-height: .2rem;
    color: #fff;
    border-radius: .63rem;
	font-size: .75rem;
	font-size: .12rem;
	padding-left: .15rem;
}
.sales_hd-right:after{
	content: '';
    position: absolute;
    top: .06rem;
    right: .09rem;
    width: .07rem;
    height: .07rem;
    border: .02rem solid #fff;
    border-width: 0 .02rem .02rem 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
    .sales_hd-left{
	content: '';
    display: inline-block;
    position: absolute;
    left: .18rem;
    top: 50%;
    width: .79rem;
    height: .15rem;
    background: url(../../assets/un_home_text.png) no-repeat;
    background-size: .79rem auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.sales_hd-right{
	background: linear-gradient(to right,#ff4e63,#ff6cc9);
	content: '';
	position: absolute;
    right: .08rem;
    top: .11rem;
	display: inline-block;
	width: .42rem;
    height: .2rem;
    line-height: .2rem;
    color: #fff;
    border-radius: .63rem;
	font-size: .75rem;
	font-size: .12rem;
	padding-left: .15rem;
}
.sales_hd-right:after{
	content: '';
    position: absolute;
    top: .06rem;
    right: .09rem;
    width: .07rem;
    height: .07rem;
    border: .02rem solid #fff;
    border-width: 0 .02rem .02rem 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.sales-huodong{
	background-position: 0 -.19rem;
}
.sales-huodong_fuli{
	width: .94rem;
}
.js-activity-list{
	width: 100%;
	box-sizing: border-box;
	border-top: .01rem solid #dbdbdd;
}
.js-activity-list>a:nth-child(1){
	box-sizing: border-box;
	border-right: .01rem solid #dbdbdd;
}
.js-activity-list>a:nth-child(3){
	box-sizing: border-box;
	border-top: .01rem solid #dbdbdd;
	border-right: .01rem solid #dbdbdd;
}
.js-activity-list>a:nth-child(4){
	box-sizing: border-box;
	border-top: .01rem solid #dbdbdd;
}
.js-activity-list>a:nth-child(5){
	box-sizing: border-box;
	border-top: .01rem solid #dbdbdd;
	border-right: .01rem solid #dbdbdd;
}
.js-activity-list>a:nth-child(6){
	box-sizing: border-box;
	border-top: .01rem solid #dbdbdd;
}
.js-activity-list_box{
	float: left;
	display: block;
	width: 50%;
}
.js-activity-list_box>img{
	display: block;
    max-width: 100%;
    height: auto;
}
.js-activity-little_box{
	float: left;
	display: block;
	width: 50%;
}
.js-activity-little_box>img{
	display: block;
    max-width: 100%;
    height: auto;
}

</style>