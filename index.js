import React, { Component } from "react";
import { render } from "react-dom";
import Layout from './module/Layout';

import "./style.css";
import "bootswatch/dist/flatly/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Layout/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
