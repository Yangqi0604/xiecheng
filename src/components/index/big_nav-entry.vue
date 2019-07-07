<template>
<div>
    <div class="big_nav-entry">
        <gardNavHotel :indexdata="indexdata.hotel"></gardNavHotel>
        <gridNavFlight :indexdata="indexdata.stackt"></gridNavFlight>
        <gridNavTravel :indexdata="indexdata.travel"></gridNavTravel>    
    </div>
</div>
</template>


<script>
import gardNavHotel from "./gard-nav-hotel"
import gridNavFlight from "./grid-nav-flight"
import gridNavTravel from "./grid-nav-travel"
export default {
    components:{
        gardNavHotel,
        gridNavFlight,
        gridNavTravel
    },
    props:["indexdata"]
}
</script>







<style scoped>
    /* big导航 */
.big_nav-entry{
	padding: .12rem;
	margin-top: -.1rem;
}
</style>