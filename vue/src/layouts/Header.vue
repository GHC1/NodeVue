<template>
    <div id="Header" class="nav" v-show="this.$store.state.header">
        <ul>
            <router-link
                to="/Home"
                exact-active-class="active"
                tag="li"
            >
                <a href="javascript:;" >首页</a>
            </router-link>
            <router-link
                to="/Attention"
                exact-active-class="active"
                tag="li"
            >
                <a href="javascript:;" >关注</a>
            </router-link>
            <router-link
                to="/Column"
                exact-active-class="active"
                tag="li"
            >
                <a href="javascript:;" >栏目</a>
            </router-link>
      
    </ul>
    </div>
</template>
<script>
// import {mapState} from '../plugins/vuex'
export default {
    name:'Header',
    computed:{
        // ...mapState(['header'])
    }
}
</script>
<style>
 .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
  .nav ul{width:13.40rem;height:2.6rem;margin:0 auto}
  .nav ul li{width:4.46rem;height:2.6rem; float:left;margin:0 auto}
  .nav ul li a{ display:block;width:4.46rem;height:2.6rem; line-height:2.6rem; text-align:center; font-size:1.2rem; color:#9e9a95;}
  .nav ul li.active a{height:2.6rem; border-bottom:0.3rem solid #5477b2; color:#5477b2;}
</style>