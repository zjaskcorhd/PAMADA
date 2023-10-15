import React from 'react'
import "./Info.css";
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

import info0 from "./webimg/info0.png";
import info1 from "./webimg/info1.png";
import info2 from "./webimg/info2.png";

export default function Info() {
  return (
    <div className='main_body'>
    <Topbar></Topbar>
    <img src={info0} className='info0'/>
    <img src={info1} className='info1'/>
    <img src={info2} className='info1'/>
    <img src={info1} className='info1'/>
    <div className="menu_bar">
      <Menubar></Menubar>
    </div>
  
    </div>
  )
}
