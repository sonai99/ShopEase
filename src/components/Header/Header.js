import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">ShopEasy</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="cart-icon">
      <Link to="/cart"><AiOutlineShoppingCart /></Link>
      </div>
    </header>
  );
}

export default Header;