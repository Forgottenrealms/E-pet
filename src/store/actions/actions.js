export default{
    asyncAdd(store){
        setTimeout(()=>
        {
           store.commit('addx',1);
        },2000)
    }
}