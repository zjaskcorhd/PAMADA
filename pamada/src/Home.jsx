import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";

import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Menubar from "./component/Menubar";
import Topbar from "./component/Topbar";
import SearchBar from './component/SearchBar';

import test from "./webimg/상추.png";
import homeimg from "./webimg/homeimg.png";

export default function Home() {
  return (
    <div className='main_body'>
        <Topbar></Topbar>
        <SearchBar></SearchBar>
        <div className='main_content'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0} //슬라이스 간격
            slidesPerView={1} //슬라이스 개수
            //navigation
            pagination={{ clickable: false }}
            //</div>scrollbar={{ draggable: true }}
          >
            <SwiperSlide> 
              <Link to="/detail">
                <img src={test} className='swipeimg'/>
              </Link>
            </SwiperSlide>
            <SwiperSlide> 
              <Link to="/detail">
                <img src={test} className='swipeimg'/>
              </Link>
            </SwiperSlide>
            <SwiperSlide> 
              <Link to="/detail">
                <img src={test} className='swipeimg'/>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <Link to="/product"> 
          <img src={homeimg} className='homeimg'/>
        </Link>

        <div className="menu_bar">
          <Menubar></Menubar>
        </div>
      
    </div>
  )
}
