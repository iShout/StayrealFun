import React from "react";

import Home from './home/Home.js'
import DocsPage from "./pages/DocsPage/DocsPage.js";
import DocDetail from "./pages/DocsPage/DocDetail.js";
import Draft from './pages/Draft/Draft.js'
import { ObserverEvent } from 'Apis/patterns/index.js'
import { observerContext } from "./apis/tools/context.js";

import {
  Route, Routes
} from "react-router-dom";


const App = () => {
  const ObEvent = new ObserverEvent()

  return (
    <>
      <observerContext.Provider value={ObEvent}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/docs' element={<DocsPage />}></Route>
          <Route path='/docs/:docId' element={<DocDetail />}></Route>
          <Route path='/draft/:docId' element={<Draft />}></Route>
          <Route path='/draft/new' element={<Draft />}></Route>
        </Routes>
      </observerContext.Provider>
    </>
  );
};
export default App;
