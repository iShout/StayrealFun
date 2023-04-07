import React from "react";

import Home from './Home/Home.js'
import DocsPage from "./Pages/DocsPage/DocsPage.js";

import {
  Route, Routes
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/docs' element={<DocsPage />}></Route>
      </Routes>
    </>
  );
};
export default App;
