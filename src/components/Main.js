import React from 'react'
import './Main.css'
import ProductsList from './ProductsList'
import Product from './Product'
import Cart from './Cart'
import { Routes, Route} from 'react-router-dom'


export default function Main() {
    return (
        <div className='main_container'>
            <Routes>
                <Route path='/' element={<ProductsList />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}