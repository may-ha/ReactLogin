
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import Home from './pages/home';
import Products from './pages/products';
export default function App() {
  
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/products" element={<Products />}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
  }


