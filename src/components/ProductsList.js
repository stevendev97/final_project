import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import "./ProductsList.css"

export default function ProductsList() {
    const [products, setProducts] = useState([])
    const { setSelectedProduct } = useContext(ProductContext)

    //this effect only runs one time after ui mounted
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.splice(0, 20)));
    }, [])


    //retun html JSX
    return (
        <div className='productsListContainer'>
            <h1>In Products list Page</h1>
            <div className='productList_container'>
                {
                    products.map((item) => {
                        return (
                            <Link onClick={() => setSelectedProduct(item)} to="/product">
                                <div className='productCard' key={item.id}>
                                    <img src={item.thumbnail} />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>

    )
}