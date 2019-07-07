<template>
<div class="sales_bd-two">
	<div v-for="items in indexdata">
		<a href="" class="c_celing_main">
			<dl class="sales-item-title">
				<dt>{{items.name}}</dt>
				<dd>{{items.dd2}}</dd>
			</dl>
			<img :src=items.pic1 alt="">
		</a>
		<a href="" class="c_celing_dest">
			<dl class="sales-itemt-title">
				<dt>{{items.dt3}}</dt>
				<dd>{{items.dd4}}</dd>
			</dl>
			<img :src=items.pic2 alt="">
		</a>
		<a href="" class="c_celing_week">
			<dl class="sales-items-title">
				<dt>{{items.dt5}}</dt>
				<dd>{{items.dd6}}</dd>
			</dl>
			<img :src=items.pic3 alt="">
		</a>
	</div>
</div>
</template>


<script>
export default {
	data() {
		return {
			
		}
	},
	props:["indexdata"]
}
</script>



<style scoped>
.sales_bd-two {
	width: 50%;
	height: 100%;
	background: #53bced;
	box-sizing: border-box;
	border-left: .04rem solid #ffffff;
}

.c_celing_main {
	float: left;
	display: flex;
	width: 100%;
	height: 0.98rem;
	background: #f9f9f9;
	align-items: center;
	align-items: center;
	justify-content: space-between;
}

.sales-item-title {
	margin: 0;
	text-align: left;
	color: #444;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	margin-left: .1rem;
}

.sales-item-title>dt {
	color: #fd3a51;
	font-weight: 700;
	font-size: .1408rem;
	letter-spacing: .06em;
}

.sales-item-title>dd {
	color: #fd3a51;
	font-size: .12rem;
	color: #444444;
}

.c_celing_main>img {
	width: .54rem;
	height: .54rem;
	margin-right: .08rem;
}

.c_celing_dest {
	float: left;
	display: block;
	width: 50%;
	height: 50%;
	background: #f9f9f9;
	box-sizing: border-box;
	border-top: .04rem solid #ffffff;
	border-right: .04rem solid #ffffff;
}

.c_celing_week {
	float: left;
	display: block;
	width: 50%;
	background: #6cd557;
}

.sales-itemt-title {
	text-align: center;
}

.c_celing_dest>img {
	width: .5rem;
	height: .5rem;
	margin: 0 auto;
}

.sales-itemt-title>dt {
	color: #6aabff;
	font-weight: 700;
	font-size: .1408rem;
	letter-spacing: .06em;
}

.sales-itemt-title>dd {
	color: #444;
	font-size: .12rem;
}

.c_celing_week {
	float: left;
	display: block;
	width: 50%;
	height: 50%;
	background: #f9f9f9;
	box-sizing: border-box;
	border-top: .04rem solid #ffffff;
}

.c_celing_week {
	float: left;
	display: block;
	width: 50%;
}

.sales-items-title {
	text-align: center;
}

.c_celing_week>img {
	width: .5rem;
	height: .5rem;
	margin: 0 auto;
}

.sales-items-title>dt {
	color: #53ca72;
	font-weight: 700;
	font-size: .1408rem;
	letter-spacing: .06em;
}

.sales-items-title>dd {
	color: #444;
	font-size: .12rem;
}
</style>