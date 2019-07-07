<template>
    <div>
        <div class="header-top">
            <div class="search-index-box">
                <span>搜索:目的地/酒店/景点/航班号</span>
            </div>
            <div class="search-index-right">
                <span @click="handleclick">我 的</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
		handleclick(){
			this.$router.push('/admin')
		}
	},
}
</script>


<style scoped>
    .header-top{
	width: 100%;
	height: .44rem;
	position: fixed;
	display: -webkit-inline-flex;
	justify-content: space-between;
	align-items: center;
	z-index: 222;
}
.search-index-box{
	width: 2.8rem;
	height: .25rem;
	line-height: .25rem;
	background: #ffffff;
	border-radius: .14rem;
	margin-left: .15rem;
	padding-left: .3rem;
}
.header-top>.search-index-box>span:after{
	position: absolute;
    top: 0.08rem;
    left: 0.1rem;
    width: .35rem;
    height: .35rem;;
    overflow: hidden;
    background: url(../../assets/home-common-sprite2x@v7.15.png) no-repeat;
    background-size: 0.21rem auto;
    background-position: .15rem .07rem;
	content: "";
}
.header-top>.search-index-box>span{
	display: flex;
	font-size: .15rem;
	color: #666666;
}
.header-top>.search-index-right>span{
	display: flex;
	font-size: .12rem;
	color: #ffffff;
	text-align: center;
}
.search-index-right{
	margin-top: .05rem;
	margin-right: .15rem;
}
.search-index-right:before{
    content: "\0020";
    width: .22rem;
    height: .22rem;
    background: url(../../assets/home-common-sprite2x@v7.15.png) no-repeat;
    background-size: .21rem auto;
	background-position: .01rem -.36rem;
	margin-left: .01rem;
	margin-top: .02rem;
    margin-bottom: .01rem;
    display: block;
}
</style>