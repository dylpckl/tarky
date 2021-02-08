import React from "react";
import './App.css';
import Body from "./Body";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
