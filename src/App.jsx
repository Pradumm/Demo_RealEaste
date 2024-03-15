import { useEffect } from 'react';
import './App.css'
import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom';
import FeaturedPage from './pages/Featured/FeaturedPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import the AOS CSS file

function App() {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feature' element={<FeaturedPage />} />
      </Routes>

    </>
  )
}

export default App
