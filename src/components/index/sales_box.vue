<template>
<div>
	<div class="sales_box">
        <salesHader></salesHader>
        <salesBoder :indexdata="indexdata"></salesBoder>
    </div>
</div>
    
</template>

<script>
import salesHader from "./salesHeader"
import salesBoder from "./salesBoder"
export default {
    components:{
		salesHader,
		salesBoder
	},
	props:["indexdata"]
}
</script>




<style scoped>
/* 特卖板块 */

</style>