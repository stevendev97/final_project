import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions/cartAction';
import "./Product.css"


function Product() {
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext)
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = item => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = itemId => {
        dispatch(removeFromCart(itemId));
    };


    // console.log(selectedProduct, "This data is in individual product page")
    console.log(items, "From Redux store")
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
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to</button>
            </div>
        </div>
    )
}

export default Product
