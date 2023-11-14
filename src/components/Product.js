import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import "./Product.css"


function Product() {
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext)

    console.log(selectedProduct, "This data is in individual product page")
    return (
        <div className='selected_card'>
            <div className='imgs_container'>
                {selectedProduct?.images.map((i, index) => {
                    return <img src={i} key={index} />
                })}
            </div>
            <div className='description_container'>
                <h1>{selectedProduct.title}</h1>
                <p>Rating: {selectedProduct.rating}</p>
                <h2>Brand: {selectedProduct.brand}</h2>
                <p>Category: {selectedProduct.category}</p>
                <p>Only {selectedProduct.stock} Left</p>
                <p>{selectedProduct.description}</p>
                <button>Add to</button>
            </div>
        </div>
    )
}

export default Product
