import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Deals from "./components/Deals";
import NewArrivals from "./components/NewArrivals";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Categories/>
            <Products/>
            <Deals/>
            <NewArrivals/>
            <Showcase/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default MainPage;