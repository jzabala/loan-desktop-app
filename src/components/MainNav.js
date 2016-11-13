import React from "react";
import { Link } from "react-router";

const MainNav = () => (
  <nav>
    <ul>
      <li><Link to="/loan-list">Loans</Link></li>
      <li><Link to="/people-list">People</Link></li>
    </ul>
  </nav>
);

export default MainNav;
