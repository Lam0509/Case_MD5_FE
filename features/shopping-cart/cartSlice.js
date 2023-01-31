import { createSlice } from "@reduxjs/toolkit";

let initialState = {}
if (typeof window !== 'undefined') {
    if (!localStorage.getItem('myCart')) {
        localStorage.setItem('myCart', JSON.stringify({
            cartItems: [],
            totalQuantity: 0,
            totalAmount: 0
        }))
    }
    initialState = JSON.parse(localStorage.getItem('myCart'))
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {
        // add item
        addItem(state, action) {
            if (localStorage.getItem('myCart') === null) {
                localStorage.setItem('myCart', JSON.stringify({
                    cartItems: [],
                    totalQuantity: 1,
                    totalAmount: 0,
                }))
            }
            state = JSON.parse(localStorage.getItem('myCart'))
            const newItem = action.payload;
            console.log('newItem',newItem)
            state.cartItems = state.cartItems || []
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;

            if (!existingItem) {
                // note: if u use just redux u shouldn't mute state array, but if u use redux toolkit that will not a problem because redux toolkit clone the array behind the scene
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newItem.price);
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem('myCart', JSON.stringify({...state}));
            return state
        },
        // remove item
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(
                    existingItem.totalPrice - Number(existingItem.price)
                );
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem('myCart', JSON.stringify({...state}))
            return state
        },
        // delete item
        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem('myCart', JSON.stringify({...state}))
            return state
        },
        // delete all after checkout
        removeCart(state, action) {
            state = {
                cartItems: [],
                totalQuantity: 0,
                totalAmount: 0
            }
            return state
        }
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;