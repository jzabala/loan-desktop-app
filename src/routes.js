import React from "react";
import { Route } from "react-router";
import App from "./components/App";
import LoanList from "./components/LoanList";
import PeopleList from "./components/PeopleList";

export default (
  <Route path="/" component={App} >
    <Route path="/loan-list" component={LoanList} />
    <Route path="/people-list" component={PeopleList} />
  </Route>
);
