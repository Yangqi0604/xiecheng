<template>
<div class="index">
    <div class="sss">
        <!-- 顶部 -->
        <headerview></headerview>
        <middle></middle>
    </div>
    <Footer></Footer>
    
</div>
</template>



<script>
import headerview from "../components/admin/headerview"
import middle from "../components/admin/middle"
import Footer from "../components/ctrip/footer"
export default {
    components: {
        headerview,
        middle,
        Footer
    }


}
</script>



<style scoped>
.index {
    /* padding-bottom: .42rem; */
    display: flex;
    flex-direction: column;
    height: 100%;
}
.sss {
    flex: 1;
    /* overflow-y: auto; */
}
</style>