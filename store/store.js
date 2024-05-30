import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import orderSlice from '../features/orders/ordersSlice'
import productSlice from '../features/products/productsSlice'
import userSlice from '../features/users/usrsSlice'


export const store= configureStore({
    reducer:{
        user : userSlice,
        product : productSlice,
        order: orderSlice
    }
})