import '@stripe/stripe-js'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  ProductCategoryPage,
  ContactPage,
  SuccessPage,
  CancelPage,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cancel" element={<CancelPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
