import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cart",
   initialState: {cartItems:[]},
   reducers:{
    addToCart:(state, action) => {
       const product = action.payload;
       const existProducts = state.cartItems.find((item) => item.id === product.id);
       if(existProducts){
        existProducts.quantity = product.quantity;
       }else{
         state.cartItems.push(product)
       }
    },
   //  removeFromCart:(state,action) => {
   //     const pro = action.payload
   //     state.cartItems = state.cartItems.filter((item) => item.id !== pro.id)
   //  }
     removeFromCart:(state,action)=>{
      const proId = action.payload;
      state.cartItems = state.cartItems.filter((item)=>item.id !== proId);
     }
   }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;