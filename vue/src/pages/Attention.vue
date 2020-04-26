<template>
    <div>
        <!-- 我是关注 -->
        <List class="list"
        v-for="(item,index) of $store.state.particulars"
        :key="item.id"
        :index="index"
        :data="item"
        >

        </List>
    </div>
</template>
<script>
import List from '../components/list'
// import axios from '../plugins/axios'
import store from '../plugins/vuex'
export default {
    data(){
        return{
            arr:[]
        }
        
    },
    components:{
        List
    },
    mounted(){
        store.dispatch('getAtten')
        // axios({
        //     url:'/api/goods/home',
            
        // }).then(
        //     res =>{
        //      this.arr = res.data.data
        //     console.log(res.data.data ,'数据')
        //     }
        // )
    }   
}
</script>
<style scoped>
    .list{
        margin-left: 1rem
    }
</style>