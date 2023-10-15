import React from 'react'
import './Com_bar.css';
import { Link } from "react-router-dom";
import write from"../webimg/write.png";

export default function Com_bar() {
  return (
    <div>
        <div className='cbar'>
          <ul id="main_post_list">
            <li className="bold">전체글</li>
            <li>인기글</li>
            <li>공지</li>
          </ul>
          <Link to="/cummunity_post"><img src={write} id="write"/></Link>
        </div>
        <hr/>
    </div>
    
  )
}
