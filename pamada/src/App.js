import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Detail from "./Detail";
import Buy from "./Buy";
import Myfarm from "./Myfarm";
import Myfarm2 from "./Myfarm2";
import Community1 from "./Community_1";
import Community2 from "./Community_2";
import Product from "./Product";
import Mypage from "./Mypage";
import Order from "./Order";
import Cart from "./Cart";
import Menu from './Menu';
import Info from './Info';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/home" Component={Home} />
        <Route path="/detail" Component={Detail} />
        <Route path="/buy" Component={Buy} />
        <Route path="/myfarm" Component={Myfarm} />
        <Route path="/myfarm2" Component={Myfarm2} />
        <Route path="/community1" Component={Community1} />
        <Route path="/community1/community2" Component={Community2} />
        <Route path="/product" Component={Product} />
        <Route path="/mypage" Component={Mypage} />
        <Route path="/order" Component={Order} />
        <Route path="/cart" Component={Cart} />
        <Route path="/menu" Component={Menu} />
        <Route path="/info" Component={Info} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
