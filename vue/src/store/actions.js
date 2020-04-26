import axios from '../plugins/axios'
let actions = {
    getlist({commit}){
        axios({
            url:'/api/goods/home',
            params:{_page:1,_limit:3},
        }).then(
            res=>{commit('getlists',res.data.data)}
        )
    },
    getbanner({commit}){
        axios({
            url:'/admin/banner',
            method:'post'
          }).then(
              res=>{commit('getbanners',res.data.data)}
          )
    },
    getAtten({commit}){
        axios({
            url:'/api/goods/home',
        }).then(
            res => {commit('getAttens',res.data.data)} 
        )
    },
    getColl({commit}){
        axios({
            url:'/api/goods/home',
        }).then(
            res => {commit('getColls',res.data.data) }
        )
    }
}
export default actions;