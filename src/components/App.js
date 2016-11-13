import React from "react";
import MainNav from "./MainNav";

const App = (props) => (
  <div>
    <MainNav />
    <section>
      {props.children}
    </section>
  </div>
);

export default App;
