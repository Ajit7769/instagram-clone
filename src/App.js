import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import './index.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
            <Router/>
      </BrowserRouter>
    </>
  );
};

export default App;
