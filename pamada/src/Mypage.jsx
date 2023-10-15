import React from 'react'
import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";

import "./Mypage.css";
import usericon from "./webimg/userIcon.png";
import setting from "./webimg/setting.png";
import mypage1 from "./webimg/mypage1.png";
import mypage2 from "./webimg/mypage2.png";
import mypage3 from "./webimg/mypage3.png";
import mypage4 from "./webimg/mypage4.png";
import mypage5 from "./webimg/mypage5.png";
import mypage6 from "./webimg/mypage6.png";
import mypage7 from "./webimg/mypage7.png";
import mypage8 from "./webimg/mypage8.png";

export default function Mypage() {
  return (
    <div className='main_body'>
    <Topbar></Topbar>



    <div className="block_1">
        <div className="block_1_1">
          <img src={usericon} alt="userIcon" className="userIconPNG_mypage" />
          <div className="block_1_text">안녕하세요 이채은님!</div>
          <div className="setting_block1">
            <div className="block_1_setting">
              <img src={setting} alt="setting" className="setting-icon" />
            </div>
          </div>
        </div>
        <div className="block_1_2">
          <div className="btn_block">
            <img src={mypage1} alt="mypage1" className="btn_block_img_1" />
            <div className="btn_block_div_1">주문내역</div>
          </div>
          <div className="btn_block">
            <img src={mypage2} alt="mypage2" className="btn_block_img_2" />
            <div className="btn_block_div_1">장바구니</div>
          </div>
          <div className="btn_block">
            <img src={mypage3} alt="mypage3" className="btn_block_img_3" />
            <div className="btn_block_div_1">문의하기</div>
          </div>
        </div>
        <div className="line_mypage"></div>
        <div className="block_2">
          <div className="block_2_text_1">커뮤니티</div>
          <div className="block_2_text_2">
            <div className="text_2_div1">내가 쓴 글</div>
            <div className="text_2_div2">0</div>
          </div>
          <div className="block_2_text_2">
            <div className="text_2_div1">내가 쓴 댓글</div>
            <div className="text_2_div2">0</div>
          </div>
        </div>
        <div className="line_mypage"></div>
        <div className="block_3">
          <div className="block_3_div">
            <img src={mypage4} alt="mypage4" className="block3_img1" />
            <div className="block3_text">공지사항</div>
          </div>
          <div className="block_3_div">
            <img src={mypage5} alt="mypage4" className="block3_img1" />
            <div className="block3_text">개인정보처리방침</div>
          </div>
          <div className="block_3_div">
            <img src={mypage6} alt="mypage4" className="block3_img1" />
            <div className="block3_text">서비스 이용 약관</div>
          </div>
          <div className="block_3_div">
            <img src={mypage7} alt="mypage4" className="block3_img1" />
            <div className="block3_text">환경설정</div>
          </div>
          <div className="block_3_div">
            <img src={mypage8} alt="mypage4" className="block3_img1" />
            <div className="block3_text">버전 정보 v.2.12</div>
          </div>
        </div>
      </div>



    <div className="menu_bar">
      <Menubar></Menubar>
    </div>
  
</div>
  )
}
