import React, { Fragment } from "react";
//import logo from './logo.svg;';
import './App.css';


//components

import InputUsername from "./components/InputUsername";
import ListUsernames from "./components/ListUsernames";

function App() {
  return (
  <Fragment>
    <div classname="container">
      <InputUsername />
      <ListUsernames />
    </div>
    </Fragment>
  );
}

export default App;
