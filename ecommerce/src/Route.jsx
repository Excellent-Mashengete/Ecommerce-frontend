import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Products from './pages/Products';
import Address from './pages/Address';
import Orders from './pages/Orders';
import Personal from './pages/Personal';
import Layout from './components/Layout';

function Routers() {
  return (  
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="account" element={<Layout />}>
            <Route path="orders" element={<Orders />} />
            <Route path="address-book" element={<Address />} />
            <Route path="personal-details" element={<Personal />} />
        </Route>
    </Routes>
  )
}

export default Routers;