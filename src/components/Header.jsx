import React from 'react';
import "../styles/header.css";
import Logo from "../images/logo.png";
import Icon_Heart from "../images/icon-heart.svg";
import Icon_Cart from "../images/icon-cart.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__container container">
                    <div className="header__contact">
                        <span>(+36) 209 640 267</span>
                        <span> Telephelyünk </span>
                    </div>

                    <p className="header__alert-news">
                        Takarítson meg többet kuponjaival
                    </p>

                    <Link to="/authentication" className="header__top-action">
                        Bejelentkezés
                    </Link>
                </div>
            </div>
            
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="logo" className="nav__logo-img"/>
                </Link>

                <div className="nav__menu" id="nav">
                    <ul className="nav__list">
                        <li><Link to="/" className="nav__link active-link"> Kezdőlap </Link></li>
                        <li><Link to="/shop" className="nav__link"> Áruház </Link></li>
                        <li><Link to="/account" className="nav__link"> Fiókom </Link> </li>
                        <li><Link to="/compare" className="nav__link"> Összehasonlitás </Link> </li>
                        <li><Link to="/authentication" className="nav__link"> Bejelentkezés </Link> </li>
                    </ul>
                </div>

                <div className="header__user-actions">
                    <Link to="/wishlist" className="header__action-btn">
                        <img src={Icon_Heart} alt="heart"/>
                        <span className="count">3</span>
                    </Link>

                    <Link to="/cart" className="header__action-btn">
                        <img src={Icon_Cart} alt="cart"/>
                        <span className="count">3</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;