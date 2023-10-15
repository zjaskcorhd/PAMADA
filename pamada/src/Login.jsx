import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";

import farmer from "./webimg/farmer.png";
import logo from "./webimg/logo.png";
import login from "./webimg/login.png";

export default function Login() {
  return (
    <div className='login_body'>
      <Link to="/signup">
        <img src={login} className='login'/>
      </Link>
    </div>
  )
}


/*<img src={logo} className='logo'/>
        <div className='login_box'>
            <input placeholder="아이디를 입력하세요"/>
        </div>
        <div className='login_box'>
            <input placeholder="비밀번호를 입력하세요"/>
        </div>
        <Link to="/signup">
          <button>로그인</button>
        </Link>
          

        <img src={farmer} className='farmer'/>*/