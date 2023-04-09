import React from 'react';
import "../styles/header.css";
import Logo from "../images/logo.png";
import Search from "../images/search.png";
import Icon_Heart from "../images/icon-heart.svg";
import Icon_Cart from "../images/icon-cart.svg";

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

                    <a href="#" className="header__top-action">
                        Bejelentkezés
                    </a>
                </div>
            </div>
            
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src={Logo} alt="logo" className="nav__logo-img"/>
                </a>

                <div className="nav__menu" id="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link active-link">Kezdőlap</a> </li>
                        <li className="nav__item"><a href="#" className="nav__link"> Áruház </a> </li>
                        <li className="nav__item"><a href="#" className="nav__link"> Fiókom </a> </li>
                        <li className="nav__item"><a href="#" className="nav__link"> Összehasonlitás </a> </li>
                        <li className="nav__item"><a href="#" className="nav__link"> Bejelentkezés </a> </li>
                    </ul>

                    <div className="header__search">
                        <input type="text" placeholder="Keresés..." className="form__input"/>
                        <button className="search__btn">
                            <img src={Search} alt="search"/>
                        </button>
                    </div>
                </div>

                <div className="header__user-actions">
                    <a href="#" className="header__action-btn">
                        <img src={Icon_Heart} alt="heart"/>
                        <span className="count">3</span>
                    </a>

                    <a href="#" className="header__action-btn">
                        <img src={Icon_Cart} alt="cart"/>
                        <span className="count">3</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;