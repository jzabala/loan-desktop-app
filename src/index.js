import React from "react";
import { Router, Route, hashHistory } from "react-router"
import { render } from "react-dom";
import App from "./components/App";
import routes from "./routes";

render(<Router history={hashHistory} routes={routes} />, document.getElementById("main-container"));
