<template>
<div>
    <div class="icon_pic">
        <imgTop :ctripdata="ctripdata.icon"></imgTop>

        <iconImgTxt :ctripdata="ctripdata.iconTxt"></iconImgTxt>
    </div>
</div>
</template>





<script>
import imgTop from "../ctrip/icon_pic-icon_img-top"
import iconImgTxt from "../ctrip/icon_pic-icon_img-txt"
export default {
    components:{
        imgTop,
        iconImgTxt
    },
    data() {
        return {
            
        }
    },
    props:["ctripdata"],
}
</script>




<style scoped>

.icon_pic{
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
}
</style>