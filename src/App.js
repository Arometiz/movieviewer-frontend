import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <Navigationbar></Navigationbar>
    </div>
  );
}

export default App;
