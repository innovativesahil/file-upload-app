import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
library.add(fab);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact default path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
