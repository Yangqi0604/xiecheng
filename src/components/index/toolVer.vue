<template>
<div>
    <div class="tool_ver">
        <a href="">网站地图 |</a>
        <a href="">
        <i class="icon-global"></i>
        <span>Language</span>
        <span class="triangle"></span>
        |
    </a>
        <a href="" class="last">
        电脑版
    </a>
    </div>
    <div class="footer_last">
        <p>
            ©
            <label class="copyno">2019</label> 携程旅行｜
            <a href="http://www.miibeian.gov.cn/" class="link-icp">沪ICP备08023580号</a>
        </p>
    </div>
</div>
</template>




<script>
export default {

}
</script>



<style scoped>
.tool_ver{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: .15rem;
}
.tool_ver>a{
	display: block;
	float: left;
	font-size: .12rem;
	color: #444444;
}
.icon-global {
	display: block;
	float: left;
    width: .15rem;
    height: .11rem;
    margin-right: .03rem;
    background: url(../../assets/un_icon_sites.png) 0 -1.6rem no-repeat;
    background-size: .3rem auto;
	line-height: .11rem;
	margin-top: .03rem;
	margin-left: .05rem;
}
.triangle {
    display: inline-block;
    border: .01rem solid #666;
    border-width: 0 .01rem .01rem 0;
    width: .05rem;
    height: .05rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    vertical-align: .02rem;
    margin: 0 .03rem;
}
.last{
	margin-left: .05rem;
}
.footer_last>p{
	display: flex;
	margin: 0;
	padding: .05rem 0;
	color: #999;
	font-size: .12rem;
	justify-content: center;
	align-items: center;
	margin-top: .05rem;
}
.link-icp{
	color: #999;
}
</style>