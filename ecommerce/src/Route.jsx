import { Routes, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/landingPage';
import Address from './pages/Address';
import Orders from './pages/Orders';
import Personal from './pages/Personal';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Category from './pages/Category';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function Routers() {
  return ( 
    <>
      <Navigation />
      <Routes>
       <Route path="/" element={<LandingPage />} /> 
        <Route path="account" element={<Layout />}>
          <Route path="orders" element={<Orders />} />
          <Route path="address-book" element={<Address />} />
          <Route path="personal-details" element={<Personal />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Category />} />

      </Routes>
    </> 
  )
}

export default Routers;