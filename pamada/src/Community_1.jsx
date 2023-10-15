import React from 'react'
import "./Community_1.css";
import { Link } from "react-router-dom";

import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";
import Combar from "./component/Com_bar";
import SimplePost from "./component/CummunitySimplePost";


export default function Community_1() {
  return (
    <div className='main_body'>
    <Topbar></Topbar>
    <Combar></Combar>

    <SimplePost title="버섯키우기 키트 나눔" author="익명" time="15:43" count="3"like="19"reply="1"/>
    <SimplePost title="버터헤드 키우는법" author="익명" time="12:39"count="3"like="2"reply="1"/>
    <SimplePost title="초보를 위한 식물키우기" author="익명" time="12:45"count="3"like="1"reply="2"/>
    <SimplePost title="궁금한점이 있어요" author="익명" time="12:39"count="3"like="2"reply="1"/>

    <div className="menu_bar">
      <Menubar></Menubar>
    </div>
  
</div>
  )
}
