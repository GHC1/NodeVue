let mutations = {
    getfooter(state,payload){
        state.footer = payload
    },
    getheader(state,payload){
        state.header = payload
    },
    getlists(state,payload){
        state.home = payload
    },
    getbanners(state,payload){
        state.banner = payload
    },
    getloing(state,payload){
        state.loging = payload
    },
    getAttens(state,payload){
        state.particulars = payload
    },
    getColls(state,payload){
        state.getColls = payload
    }
}
export default mutations;