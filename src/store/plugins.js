const myPlugin = store => {
    store.subscribe((mutation, state) => {
        //判断是否是加入购物车的操作，如果是的话，就存入到购物车里面去
        if(mutation.type==='addToCart'){
            //如果是加入购物车的操作就把数据存在localStorage里面去
            window.localStorage.setItem('add-to-cart',JSON.stringify(state.Cart));
        }
        else{
            // console.log('加入失败');
        }
    })
  }
  export default [myPlugin]