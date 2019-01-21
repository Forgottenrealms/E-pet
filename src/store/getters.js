export default {
    totalCount(state){
        return state.Cart.reduce((result,item)=>
        {
            result+=item.count;
            return result;
        },0)
    },
    totalPrice(state){
        return state.Cart.reduce((result,item)=>
        {
            result+=item.price*item.count;
            return result;
        },0)
    },
    isCheckStatus({Cart}){
        return Cart.every((item)=>item.ischecked===true)
    }
}