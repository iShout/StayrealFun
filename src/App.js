import React from "react";

import Home from './Home/Home.js'
import DocsPage from "./Pages/DocsPage/DocsPage.js";
import DocDetail from "./Pages/DocsPage/DocDetail.js";

import {
  Route, Routes
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DocsPage />}></Route>
        <Route path='/docs' element={<DocsPage />}></Route>
        <Route path='/docs/:docId' element={<DocDetail />}></Route>
      </Routes>
    </>
  );
};
export default App;
