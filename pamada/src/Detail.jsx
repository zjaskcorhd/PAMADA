import React from 'react'
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

export default function Detail() {
  return (
    <div className='main_body'>
    <Topbar></Topbar>


    <div className="menu_bar">
      <Menubar></Menubar>
    </div>
  
</div>
  )
}
