import React from 'react'
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";
import Combar from "./component/Com_bar";
import SimplePost from "./component/CummunitySimplePost";

import content from "./webimg/cum_content.png"

export default function Community_2() {
  return (
    <div className='main_body'>
    <Topbar></Topbar>
    <Combar></Combar>

    <img src={content} style={{width: "391px", height: "655px"}}/>

    <div className="menu_bar">
      <Menubar></Menubar>
    </div>
  
  </div>
  )
}
