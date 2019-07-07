<template>
    <div>
        <div class="grid-nav-travel" v-for="items in indexdata">
            <a href="" class="c_vacation">
            <span>{{items.one}}</span>
        </a>
            <a href="" class="c_crh_travel">
            <span>{{items.two}}</span>
        </a>
            <a href="" class="c_cruise">
            <span>{{items.three}}</span>
        </a>
            <a href="" class="c_custom">
            <span>{{items.four}}</span>
        </a>
        </div>
    </div>
</template>


<script>
export default {
    props:["indexdata"]
}
</script>




<style scoped>
    .big_nav-entry{
	padding: .12rem;
	margin-top: -.1rem;
}
.gard-nav-hotel{
	border-top-left-radius: .08rem;
	border-top-right-radius:.08rem;
	background: linear-gradient(to right,#fa5956,#fb8650 54%);
	height: .65rem;
}
.c_hotel{
	display: block;
	line-height: 65%;
	background: url(../../assets/grid-nav-items-hotel@v7.15.png)no-repeat right bottom;
	background-size: .73rem auto;
	width: 31%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_hotel>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}

.c_hotel-inn{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: url(../../assets/grid-nav-items-minsu@v7.15.png)no-repeat left bottom;
	background-size: .37rem auto;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right:.01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_hotel-inn>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_hotel-package{
	display: block;
	background: linear-gradient(to right,#ffbc49,#ffd252);
    padding: 0;
	width: 46%;
	height: 100%;
	float: left;
	border-top-right-radius: .08rem;
	box-sizing: border-box;
	border-bottom: .01rem solid #ffffff;
}
.grid-nav-jhj{
	line-height: 65%;
	height: 100%;
	display: block;
	background: url(../../assets/grid-nav-items-jhj@v7.15.png) no-repeat;
	background-size: .86rem auto;
	background-position: right bottom;
	position: relative;
}
.grid-nav-wrd{
	font-size: .14rem;
	color: #ffffff;
	display: flex;
	margin-left: .25rem;
}
.grid-nav-item-tag{
	display: block;
	color: #fff;
	height: .13rem;
	line-height: .13rem;
    font-size: .1008rem;
    background: #f54c45;
    border-radius: .07rem;
	border-bottom-left-radius: 0;
	position: absolute;
	padding: 0 .05rem;
	top: .1rem;
	left: .65rem;
}

.grid-nav-flight{
	background: linear-gradient(to right,#4b8fed,#53bced);
	height: .65rem;
}
.c_flight{
	display: block;
	line-height: 65%;
	background: url(../../assets/grid-nav-items-flight@v7.15.png)no-repeat right bottom;
	background-size: .79rem auto;
	width: 31%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_flight>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_train_ticket{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: url(../../assets/grid-nav-items-train.png)no-repeat left bottom;
	background-size: .37rem auto;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_train_ticket>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_bus_ticket{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_bus_ticket>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_car{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_car>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}


.grid-nav-travel{
	background: linear-gradient(to right,#34c2aa,#6cd557);
	height: .65rem;
	border-bottom-left-radius: .08rem;
	border-bottom-right-radius: .08rem;
}
.c_vacation{
	display: block;
	line-height: 65%;
	background: url(../../assets/grid-nav-items-travel@v7.15.png)no-repeat right bottom;
	background-size: .94rem auto;
	width: 31%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_vacation>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_crh_travel{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: url(../../assets/grid-nav-items-dingzhi@v7.15.png)no-repeat left bottom;
	background-size:.61rem auto;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_crh_travel>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_cruise{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	border-right: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_cruise>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
.c_custom{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 23%;
	height: 100%;
	border-bottom: .01rem solid #ffffff;
	box-sizing: border-box;
	float: left;
}
.c_custom>span{
	font-size: .14rem;
	color: #ffffff;
	display: block;
	margin-left: .1rem;
}
</style>