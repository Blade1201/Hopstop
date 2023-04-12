import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./components/Shop";
import Details from "./components/Details";

const App = () => {
  return (
      <div className="App">
          <HashRouter>

              <Routes>

                  <Route path = "/" element = { <MainPage/> }/>

                  <Route path = "/shop" element = { <Shop/> }/>

                  <Route path = "/details" element = { <Details/> }/>

              </Routes>

          </HashRouter>
      </div>
  );
}

export default App;