import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingWeb from './pages/Landing_Web';
import LandingMob from './pages/Landing_Mob';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
const App = () => {
  const { height, width } = useWindowDimensions();

  return (
    <BrowserRouter>
      {
        width < height
          ?
          <Routes>
            <Route path="/" element={<LandingMob  width={width}/>} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<LandingWeb />} />
          </Routes>
      }
    </BrowserRouter>
  )
}

export default App;
