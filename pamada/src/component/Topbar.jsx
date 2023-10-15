import React from 'react'
import "./Topbar.css"

import menu from "../webimg/menu.png";
import bell from "../webimg/bell.png";

import { Link } from "react-router-dom";

function Topbar(){
  return (
    <>
    <div className='toptop'></div>
    <div className='top_div'>
      <Link to="/menu" id="_bar"><img src={menu} alt="메뉴" className="icon"/></Link>
      <div/>
      <Link to="/cummunity" id="_bar"><img src={bell} alt="메뉴" className="icon"/></Link>
    </div>
    </>
    
  )
}
export default Topbar;
