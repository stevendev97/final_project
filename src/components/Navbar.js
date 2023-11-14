import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({ isLogin, setIsLogin }) {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
            </div>

            <div className='nav_right'>
                {isLogin ?
                    <>
                        <a className='cart'>
                            <span class="cart-icon">🛒</span>
                            <span class="cart-number">1</span>
                        </a>
                        <a onClick={() => setIsLogin(false)}>Logout</a>
                    </>
                    : <a>Login</a>
                }
            </div>
        </nav>
    )
}