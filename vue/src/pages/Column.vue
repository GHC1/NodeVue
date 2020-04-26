<template>
    <div>
        <List class="list"
        v-for="item of $store.state.getColls"
        :key="item.id"
        :data="item"
        />

    </div>
</template>
<script>
import List from '../components/list'
// import axios from '../plugins/axios'
import store from '../plugins/vuex'
export default {
    components:{
        List
    },
    data(){
        return{
                arr:[
                {_id:1,title:'11111111111',intro:'栏目1'},
               
            ]
        }
    },
    mounted(){
        store.dispatch('getColl')
        // axios({
        //     url:'/api/goods/home',

        // }).then(
        //     res => {
        //         this.arr = res.data.data
        //         // console.log( res.data)
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