import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addOrderA, getOrderByIdA, getOrdersA } from './ordersApi'
const initialState = {
    arrOrders: [],
    cart: [],
    price: 0
}

export const addOrder = createAsyncThunk(
    'order',
    async (order, thunkAPI) => {
        const res = await addOrderA(order)
        return res
    },
)

export const getOrderById = createAsyncThunk(
    'order',
    async (id, thunkAPI) => {
        const res = await getOrderByIdA(id)
        return res
    },
)

export const getAllOrders = createAsyncThunk(
    'order',
    async (thunkAPI) => {
        const res = await getOrdersA()
        return res
    },
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToShoppingCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.p.id === action.payload.p.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.cart = [...state.cart, action.payload]
            }
            state.price += action.payload.quantity * action.payload.p.price

        },
        removeFromShoppingCart: (state, action) => {
            const productToRemove = state.cart.find(item => item.p.id === action.payload.p.id);
            if (productToRemove) {
                state.cart = state.cart.filter(item => item !== productToRemove);
                state.price -= productToRemove.quantity * productToRemove.p.price;
            }
        },
        emptyCart: (state, action) => { 
            state.cart=[]
            state.price=0
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(addOrder.fulfilled, (state, { payload }) => {
                state.arrOrders = payload
                state.status = ""
            })

    },

})
export const { addToShoppingCart, removeFromShoppingCart, emptyCart } = orderSlice.actions

export default orderSlice.reducer