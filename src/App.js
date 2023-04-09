import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Deals from "./components/Deals";
import NewArrivals from "./components/NewArrivals";
import Showcase from "./components/Showcase";

const App = () => {
  return (
      <div className="App">
            <Header/>
            <Home/>
            <Categories/>
            <Products/>
            <Deals/>
            <NewArrivals/>
            <Showcase/>
      </div>
  );
}

export default App;