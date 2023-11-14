import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({ isLogin, setIsLogin }) {
    const items = useSelector(state => state.cart.items);

    //funtion that loop through the array and add all the quantity value

    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
            </div>

            <div className='nav_right'>
                {isLogin ?
                    <>
                        <Link to='/cart' className='cart'>
                            <span class="cart-icon">🛒</span>
                            {
                               items.length !== 0 &&  <span class="cart-number">{items.length}</span>
                            }
                        </Link>
                        <a onClick={() => setIsLogin(false)}>Logout</a>
                    </>
                    : <a>Login</a>
                }
            </div>
        </nav>
    )
}