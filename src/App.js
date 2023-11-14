import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import { ProductContext } from './components/ProductContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()

  return (
    <Router>
      <ProductContext.Provider value={{selectedProduct, setSelectedProduct }}>
        <div className="App">
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
          {
            isLogin ? <Main /> : <Login onSetIsLogin={setIsLogin}  />
          }
        </div>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
