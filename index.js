import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import test from './assets/images/test.JPG'

const App = () => {
  return <div>
    react
    <img src={test} alt="" style={{width:300}}/>
  </div>
};

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App></App>)