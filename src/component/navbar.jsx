import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-section">
                <a href="#">Furniture</a>
                <a href="#">Why Feather</a>
                <a href="#">Feather for Business</a>
            </div>

            <div className="nav-logo">
                <h3>feather</h3>
            </div>

            <div className="nav-section nav-right">
                <a href="#">Check if We Deliver</a>
                <a href="#">Search</a>
                <a href="#">Account</a>
                <div className="cart-icon">
                    <MdOutlineShoppingCart />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;