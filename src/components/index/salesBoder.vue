<template>
<div>
    <div class="sales_bd" v-for="items in indexdata.hotcake">
        <span class="sales_bd-one_bk">{{items.name}}</span>
            <a href="" class="sales_bd-one">
                <p class="sales_bd-one-wr">{{items.detalis}}</p>
                <span><b>￥</b>{{items.price}}<i>起</i></span>
            </a>
        <salesBdTwo :indexdata="indexdata.bdTwo"></salesBdTwo>
    </div>
</div>
    
</template>



<script>
import salesBdTwo from "./sales_bd-two"
export default {
    components: {
        salesBdTwo
    },
    data() {
        return {
            
        }
    },
    props:["indexdata"]
}
</script>


<style scoped>
/* 特卖板块下面的 */
.sales_bd{
	display: flex;
	justify-content: space-between;
	padding: 0 .08rem .08rem;
	height: 1.87rem;
	position: relative;
	background: #ffffff;
}
.sales_bd-one{
	display: block;
	width: 50%;
	height: 1.87rem;
	background: #f9f9f9;
	
}
.sales_bd-one>p{
	height: .3rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: .08rem;
	font-size: .1408rem;
	color: #222222;
	font-weight: 500;
}
.sales_bd-one>span{
	display: block;
	font-size: .18rem;
	padding: .05rem;
	color: #ff495e;
}
.sales_bd-one>span:nth-child(1){
	font-size: .12rem;
}
.sales_bd-one>span>b{
	font-size: .12rem;
}
.sales_bd-one>span>i{
	font-size: .16rem;
	font-style: normal;
	color: #ff495e;
}
.sales_bd-one_bk{
	position: absolute;
    z-index: 10;
    line-height: .2rem;
    padding: 0 .06rem 0 .08rem;
    left: .08rem;
    top: 0;
    background-color: #fd3a51;
    color: #fff;
    font-size: .12rem;
    text-align: center;
}
.sales_bd-one_bk:after{
	position: absolute;
    content: '';
    top: 0;
    right: -.08rem;
    border-width: .2rem .08rem;
    border-style: solid;
    border-color: #fd3a51 transparent transparent transparent;
}
</style>