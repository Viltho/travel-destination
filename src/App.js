import React from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import NoPage from './components/NoPage/NoPage'
import Tours from './components/Tours/Tours'
import Tour from './components/Tours/Tour/Tour'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <main className="py-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="city" element={<Tours />} />
            <Route path="city/:id" element={<Tour />} />
            {/* <Route path="city/:id" element={<TourDetails />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
