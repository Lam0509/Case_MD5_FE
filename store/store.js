import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/shopping-cart/cartSlice";
import cartUiSlice from "../features/shopping-cart/CartUiSlice";
import authSlice from "../features/auth/authSlice";

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
        auth: authSlice.reducer
    },
});

// export default store;