import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./components/Shop";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

const App = () => {
  return (
      <div className="App">
          <HashRouter>

              <Routes>

                  <Route path = "/" element = { <MainPage/> }/>

                  <Route path = "/shop" element = { <Shop/> }/>

                  <Route path = "/details" element = { <Details/> }/>

                  <Route path = "/cart" element = { <Cart/> }/>

                  <Route path = "/wishlist" element = { <Wishlist/> }/>

              </Routes>

          </HashRouter>
      </div>
  );
}

export default App;