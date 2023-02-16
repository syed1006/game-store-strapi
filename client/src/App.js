import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import CartState from "./context/Cart/CartState";

const App = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <CartState>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartState>
            </BrowserRouter>
        </div>
    )
}

export default App;