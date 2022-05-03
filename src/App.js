import './App.css';
import './statics/common.css';
import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import BoardList from "./components/BoardList";

function Header() {
  return <div className="nav">
      <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/board/list">게시판</Link>
      </div>
  </div>
}

function Article() {
  return <div>
    <p>
      ------------------------------
    </p>
    <Routes>
      <Route path="/" element={<Home/>} exact={true} />
      <Route path="/about" element={<About/>} />
      <Route path="/board/list" element={<BoardList/>} />
    </Routes>
    <p>
      ------------------------------
    </p>
  </div>
}

function Footer() {
  return <footer>
    여기는 footer 자리입니다.
  </footer>
}

function App() {
  return (
    <div className="w3-center">
      <Header/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
