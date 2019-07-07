<template>
    <div>
         <ul class="subnav-entry">
        <li v-for="items in indexdata">
            <a href="">
            <span class="subnav-entry-bck"></span>
            <span class="subnav-entry-name">{{items}}</span>
        </a>
        </li>
    </ul>
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
    
/* 一堆图标按钮 */
.subnav-entry {
    overflow: hidden;
	margin: 0 .12rem .12rem;
	display: flex;
	flex-wrap: wrap;
}
.subnav-entry>li>a{
	display: block;
	width: .7rem;
	height: .526rem;
	text-align: center;
}
.subnav-entry-bck{
	width: .28rem;
	height: .28rem;
	background:url(../../assets/un_ico_subnav2x@v7.152.png)no-repeat;
	background-size: .28rem auto;
	background-repeat: no-repeat;
	display: block;
	margin: .1rem auto 0;
}
.subnav-entry-name{
	display: block;
	font-size: .1rem;
	margin-top:.05rem;
	color: #222222;
}
.subnav-entry>li:nth-child(2) .subnav-entry-bck{
	background-position: 0 -.28rem;
}
.subnav-entry>li:nth-child(3) .subnav-entry-bck{
	background-position: 0 -.56rem;
}
.subnav-entry>li:nth-child(4) .subnav-entry-bck{
	background-position: 0 -.84rem;
}
.subnav-entry>li:nth-child(5) .subnav-entry-bck{
	background-position: 0 -1.12rem;
}
.subnav-entry>li:nth-child(6) .subnav-entry-bck{
	background-position: 0 -1.4rem;
}
.subnav-entry>li:nth-child(7) .subnav-entry-bck{
	background-position: 0 -1.68rem;
}
.subnav-entry>li:nth-child(8) .subnav-entry-bck{
	background-position: 0 -1.96rem;
}
.subnav-entry>li:nth-child(9) .subnav-entry-bck{
	background-position: 0 -2.24rem;
}
.subnav-entry>li:nth-child(10) .subnav-entry-bck{
	background-position: 0 -2.52rem;
}

</style>