import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './normalize.css';
import './reset.css';
import './App.css';

import Content from "./components/Content/Content";
import Messenger from "./components/Messenger/Messenger";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";

function App(props) {

  console.log(props)

  return (
    <>
      <Router>
        <div className='app-wrapper'>
          <Header />
          <SideMenu />
          <div className="app-wrapper__content">
            <Routes>
              <Route path='/profile' element = {<Content/>} />
              <Route path='/feed' element = {<Content/>} />
              <Route path='/messenger/*' element = {<Messenger 
                messagesData={props.messagesData}
                companionsData ={props.companionsData}/>} 
                />
              {/*<Route path="*" element = {<Error/>} />*/}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
