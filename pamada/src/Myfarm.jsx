import React from 'react'
import "./Myfarm.css";
import { Link } from "react-router-dom";
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

import myfarm from"./webimg/myfarm.png";
import m1 from "./webimg/m1.png";
import m2 from "./webimg/m2.png";
import m3 from "./webimg/m3.png";
import m4 from "./webimg/m4.png";
import f_btn from "./webimg/f_btn.png";

export default function Myfarm() {
  return (
    <div className='main_body'>
      <Topbar></Topbar>
      
      <img src={myfarm} className='farmer'/>
      <Link to="/myfarm2">
        <img src={f_btn} className='f_btn'/>
      </Link>
   

      <div className='farm_div'>
        <img src={m1} className='con_box'/>
        <img src={m2} className='con_box'/>
        <img src={m3} className='con_box'/>
        <img src={m4} className='con_box'/>

      </div>
    
      <div className="menu_bar">
        <Menubar></Menubar>
      </div>
  </div>
  )
}
