import React, { useState } from 'react'
import './Login.css'

//This usaully is stores in our data base 
const userInfo = {
    name: 'steven',
    password: '123321'
}

export default function Login({ onSetIsLogin }) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log("click", userName, password)
        if (userName === userInfo.name && password === userInfo.password) {
            console.log("Login success")
            onSetIsLogin(true)
            sessionStorage.setItem("isLogin", true);
        } else {
            console.log("Login faild")
            onSetIsLogin(false)
        }

    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='login_form'>
            <h1>Login</h1>
            <div className='form_inputs'>
                <label>User Name</label>
                <input type='text' onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='form_inputs'>
                <label>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit} id='submit_btn'>Login</button>
        </form>
    )
}