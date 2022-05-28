import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    function handleClick() {
        console.log("clicked")
    }

    return (
        <div className="navbar">
            <div className="navbar-outer-div">
                <div className="navbar-links">
                    <ul className="navbar-ul">
                        <Link to="/men's-clothing">
                            <li className="menuitem">Men's Clothing</li>
                        </Link>
                        <Link to="/women's-clothing">
                            <li className="menuitem">Women's Clothing</li>
                        </Link>
                        <Link to="/jewelery">
                            <li className="menuitem">Jewelery</li>
                        </Link>
                        <Link to="electronics">
                            <li className="menuitem">Electronics</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleClick} className="navbar-cart">
                    <ul className="navbar-ul">
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}