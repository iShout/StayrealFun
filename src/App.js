import React from "react";

import Home from './Home/Home.js'
import DocsPage from "./Pages/DocsPage/DocsPage.js";
import DocDetail from "./Pages/DocsPage/DocDetail.js";
import Draft from './Pages/Draft/Draft.js'

import {
  Route, Routes
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Draft />}></Route>
        <Route path='/docs' element={<DocsPage />}></Route>
        <Route path='/docs/:docId' element={<DocDetail />}></Route>
        <Route path='/draft/:docId' element={<Draft />}></Route>
        <Route path='/draft/new' element={<Draft />}></Route>
      </Routes>
    </>
  );
};
export default App;
