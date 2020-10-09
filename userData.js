// const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];
//
// const cartList = [
//   {
//     id: 'idd015',
//     count: 3
//   },
//   {
//     id: 'idd045',
//         count: 1
//   },
//   {
//     id: 'idd095',
//         count: 2
//   }
// ];

import {getLocalStorage, setLocalStorage} from './storage.js';


const userData = {
  //wishListData: ['idd005', 'idd100', 'idd077', 'idd033'],
  wishListData: getLocalStorage('wishList'),
  get wishList (){
      return this.wishListData;
  },
  set wishList(id){
    if(this.wishListData.includes(id)){
      const index = this.wishListData.indexOf(id);
      this.wishListData.splice(index, 1);
    }else{
      this.wishListData.push(id);
    }
    setLocalStorage('wishList', this.wishListData);
  },

  // cartListData: [
    // {
    //   id: 'idd015',
    //   count: 3
    // },
    // {
    //   id: 'idd045',
    //       count: 1
    // },
    // {
    //   id: 'idd095',
    //       count: 2
    // }
  // ],
  cartListData: getLocalStorage('cartList'),

  get cartList(){
    return this.cartListData
  },
  set cartList(id){
    let obj = this.cartListData.find((item) => item.id === id);
    if(obj){
      obj.count++;
    } else{
      obj = {
        id,
        count: 1
      };
      this.cartListData.push(obj);
    }
    setLocalStorage('cartList', this.cartList);
    //console.log(this.cartListData, 'корзина'); //выводим корзину
  },

  set changeCountCartList(itemCart){
    let obj = this.cartListData.find((item) => item.id === itemCart.id);
    obj.count = itemCart.count;
    setLocalStorage('cartList', this.cartList);
  },

  set deleteItemCart(idd) {
    let index = -1;
      this.cartList.forEach((item, i) => {
        if(item.id === idd){
          index = i;
        }
      });
      this.cartList.splice(index, 1);
      setLocalStorage('cartList', this.cartList);
  }

};

export default userData;
