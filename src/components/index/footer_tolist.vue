<template>
<div>
    <div class="footer_tolist">
        <ul>
            <li v-for="items in indexdata">
                <span class="footer_pic"></span>
                <span class="footer_wrd">{{items}}</span>
            </li>
            
        </ul>
    </div>
</div>
</template>



<script>
export default {
	props:["indexdata"]
}
</script>


<style scoped>
/* footer */
footer_tolist{
	width: 100%;
	background: #ffffff;
}
.footer_tolist>ul{
	padding: 0 .55rem .12rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	margin-top: .01rem;
}
.footer_tolist>li{
	flex: 1;
	/* width: .7rem;
	height: .526rem;
	text-align: center; */
}
.footer_pic{
	width: .28rem;
	height: .28rem;
	background:url(../../assets/un_ico_home_v620.png)no-repeat;
	background-position: -.57rem -1.43rem;
	background-size:1.04rem 3.26rem;
	background-repeat: no-repeat;
	display: block;
	margin: .1rem auto 0;
}
.footer_wrd{
	display: block;
	font-size: .1rem;
	margin-top:.05rem;
}
.footer_tolist>li:nth-child(2) .footer_pic{
	background-position: -.57rem -1.83rem;
}
</style>