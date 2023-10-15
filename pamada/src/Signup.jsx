import React from 'react'
import "./Signup.css"
import { Link } from "react-router-dom";
import signup from "./webimg/signup.png";

export default function Signup() {
  return (
    <div className='login_body'>
      <div className="top_div"></div>

      <Link to="/home">
            <img src={signup} className='signup_img'/>
        </Link>  
  
    </div>
  )
}


/*<div className="signup_box">
        <div className='signup_txt'>
          아이디
        </div>
        <div className='signup_input'>
          <input placeholder="아이디를 입력하세요"/>
        </div>
      </div>
      <div className="signup_box">
        <div className='signup_txt'>
          이메일
        </div>
        <div className='signup_input'>
          <input placeholder="abcd123@gmail.com"/>
        </div>
      </div>
      <div className="signup_box">
        <div className='signup_txt'>
          비밀번호
        </div>
        <div className='signup_input'>
          <input placeholder="....."/>
        </div>
      </div>
      <div className="signup_box">
        <div className='signup_txt'>
          비밀번호 확인
        </div>
        <div className='signup_input'>
          <input placeholder="....."/>
        </div>
      </div>

      <Link to="/home">
        <div className="signup">
          <h1>
            회원가입
          </h1>
        </div>
      </Link>*/