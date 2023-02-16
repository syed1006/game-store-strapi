import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import './Cart.css'

const Cart = () => {
    const { cart, setCart } = useCart();
    const [total, setTotal] = useState();
    const url = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const calculateTotal = ()=>{
        let sum = 0 ;
        cart.map((item)=>{
            sum += item.price
        })
        setTotal(sum);
    }
    useState(()=>{
        calculateTotal()
    }, []);

    const handleDiscard = ()=>{
        setCart([]);
        navigate('/')
    }

    const handleCheckout = ()=>{
        localStorage.setItem('total', total);
        navigate('/address')
    }
    return (
        <section className="cart-container">
            <section className="cart-cards">
                {cart.map((item, index) => {
                    return (
                        <div className="cart-item" key={index}>
                            <img src={url + '/uploads/' + item.image} alt="" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <h5>₹ {item.price}</h5>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className="total">
                <h3>Total: {total}</h3>
            </section>
            <section className="cart-btns">
                <button className="btn" onClick={handleDiscard}>Discard</button>
                <button className="btn" onClick={handleCheckout}>Checkout</button>   
            </section>
        </section>
    )
}
export default Cart;