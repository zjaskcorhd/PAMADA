import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import menu from '../webimg/menu.png';
import community from '../webimg/community.png';
import home from '../webimg/home.png';
import info from '../webimg/info.png';
import farm from '../webimg/farm.png';
import mypage from '../webimg/mypage.png';
import shop from '../webimg/shop.png';

function Menubar(){
    return( 
        <div className="bar">
            <Link to="/myfarm" id="_bar"><img src={home} alt="홈" className="icon"/>내농장</Link>
            <Link to="/community1" id="_bar"><img src={community} alt="커뮤니티" className="icon"/>커뮤니티</Link>
            <Link to="/home" id="_bar"><img src={shop} alt="쇼핑" className="icon"/>쇼핑</Link> 
            <Link to="/info" id="_bar"><img src={info} alt="정보" className="icon"/>정보</Link>
            <Link to="/mypage" id="_bar"><img src={mypage} alt="마이페이지" className="icon"/>마이페이지</Link>
        </div>
    )
}

export default Menubar;