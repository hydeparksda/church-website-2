import React from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import NewHere from './components/NewHere/NewHere';
import Sermons from './components/Sermons/Sermons';
import Give from './components/Give/Give';
import Events from './components/Events/Events';
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <MainNav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/give" element={<Give />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newhere" element={<NewHere />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;