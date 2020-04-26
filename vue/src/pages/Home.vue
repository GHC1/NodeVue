<template>
    <div id="Home">
        <Views
        :data="$store.state.banner"
        >
        </Views>
         <List class="list"
        v-for="(item,index) of $store.state.home"
        :key="item.id"
        :index="index"
        :data="item"
      />
      <Loging></Loging>
    </div>
</template>
<script>
import Views from '../components/viewpager'
import List from '../components/list'
import Loging from '../components/loging'
// import axios from 'axios';
// import axios from '../plugins/axios'
export default {
    data(){
        return{
            arr:[],
            list:[]
        }
    },
    components:{
        Views,
        List,
        Loging
    },
    methods:{
        
    },
     mounted(){
         this.$store.dispatch('getlist')
        this.$store.dispatch('getbanner')
    //   axios({
    //       url:'/admin/banner',
    //       method:'post'
    //   }).then(
    //       res=>{
    //           this.list = res.data.data
    //           console.log(res.data.data,'轮播图数据')
    //       }
    //   )
    }
}
</script>
<style>
.list{
    margin-left: 1rem;
    
}
</style>