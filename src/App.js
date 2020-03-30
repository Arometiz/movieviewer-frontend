import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./components/navigationbar/Navigationbar";
import Toolbar from "./components/toolbar/Toolbar";


function App() {
  return (
    <div>
      <Toolbar></Toolbar>
      <Navigationbar></Navigationbar>
    </div>
  );
}

export default App;
