import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./components/Shop";
import Details from "./components/Details";

const App = () => {
  return (
      <div className="App">
          <BrowserRouter>

              <Routes>

                  <Route path = "/" element = { <MainPage/> }/>

                  <Route path = "/shop" element = { <Shop/> }/>


                  <Route path = "/details" element = { <Details/> }/>

              </Routes>

          </BrowserRouter>
      </div>
  );
}

export default App;