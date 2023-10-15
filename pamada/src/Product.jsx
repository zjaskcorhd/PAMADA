import React from 'react'
import "./Product.css";
import prod from "./webimg/product.png";

import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

export default function Product() {
  return (
    <div className='main_body'>
      <Topbar></Topbar>

      <img src={prod} className='prod'/>
    <div className="menu_bar">
        <Menubar></Menubar>
      </div>
  </div>
  )
}
