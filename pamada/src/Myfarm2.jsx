import React from 'react'
import "./Myfarm2.css";
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

import farm2 from"./webimg/farm2.png";

export default function Myfarm2() {
  return (
    <div>
      <div className='main_body'>
      <Topbar></Topbar>
      
      <img src={farm2} className='farm2'/>
    
      <div className="menu_bar">
        <Menubar></Menubar>
      </div>
  </div>
    </div>
  )
}
