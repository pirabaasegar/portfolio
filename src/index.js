import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Blog from './Blog';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';

window.addEventListener("load", () => {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
});

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="work" element={<Work/>} />
      <Route path="blog" element={<Blog/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);