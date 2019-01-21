export default {
  handleScroll(state, range) {
    if (range >= 120) {
      state.isScrollTop = true;
    } else {
      state.isScrollTop = false;
    }
  },
  changeLoginStatus(state, status) {
    state.isLogin = status;
  },
  //mutations只能传递两个参数，第一个是state
  addToCart(state,item){
    console.log(item);
    const {id,img,title,price}=item;
    //然后判断state.cart数组里面是否存在，不存在就push，存在的话就count++
    const boolExist=state.Cart.some(cartItem=>cartItem.id===id)
    console.log(boolExist);
    if(boolExist){
      state.Cart=state.Cart.map(cartItem=>{
        if(cartItem.id===id){
          cartItem.count+=1;
        }
        return cartItem;
      })
    }else{
      state.Cart.push({
        id,
        img,
        title,
        price,
        count:1,
        ischecked:false
      })
    }

  },
  addCount(state,id){
    console.log(id);
    state.Cart=state.Cart.map(cartItem=>{
      if(cartItem.id===id){
        cartItem.count+=1;
      }
      return cartItem;
    })
  },
  reduceCount(state,id){
    console.log(id);
    state.Cart=state.Cart.map(cartItem=>{
      if(cartItem.id===id &&cartItem.count>1){
        cartItem.count-=1;
      }
      return cartItem;
    })
  },
  changeCheckStatus({Cart},id){
    console.log(id);
    Cart=Cart.map((item)=>{
      if(item.id==id){
        item.ischecked=!item.ischecked;
      }
    })

  },
  isAllcheckStatus({Cart},event){
    if(event.srcElement.checked){
      Cart.map((item)=>{
        item.ischecked=true;
        return item;
      })
    }
    else{
      Cart.map((item)=>{
        item.ischecked=false;
        return item;
      })
    }
       
  }
};
