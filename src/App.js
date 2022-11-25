import React from "react";

import './App.css';

import Content from "./components/Content";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";



function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideMenu />
      <Content/>
    </div>
  );
}

export default App;
