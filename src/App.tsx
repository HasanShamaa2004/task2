// import { ShoppingCart } from './Components/ShoppingCart'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

import { Navbar } from './Components/Navbar'
import { ProductDetails } from './Components/Product/ProductDetails'
import { ProductPage } from './Components/Product/ProductPage'
import { ShoppingCart } from './Components/ShoppingCart'
import { About } from './Pages/About'
import { Booking } from './Pages/Booking'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shopping" element={<ShoppingCart />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/:id" element={<ProductDetails />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/booking/:id" element={<ProductDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </CartProvider>
    )
}

export default App
