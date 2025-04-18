import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
const Header = () => {
  return (
    <>
    <ParallaxProvider>
      <Parallax opacity={[100,0] }>
        <div className="home-image"></div>
        <div className="blender"></div>
      </Parallax>
      <div className="title">
      <h1>SSAC</h1>
      </div>
      
      <Parallax translateX={[30, 70]}>
        <div className="plane">
          <img src="plane.png" />
        </div>
      </Parallax>
      <Parallax translateX={[0, -70]}>
        <div className="cloud">
          <img src="https://freepngimg.com/thumb/cloud/1-white-clouds-png-image.png" />
        </div>
      </Parallax>
    </ParallaxProvider>
    <svg width="1440" height="285" viewBox="0 0 1440 285" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H1440V285C1440 285 1298 285 1073 285C848 285 625.5 222 367.5 222C109.5 222 0 222 0 222V0Z" fill="url(#paint0_linear_1_472)"/>
<defs>
<linearGradient id="paint0_linear_1_472" x1="798.5" y1="94.5" x2="804.5" y2="-110" gradientUnits="userSpaceOnUse">
<stop stop-color="#1A120B"/>
<stop offset="1" stop-color="#1A120B"/>
</linearGradient>
</defs>
</svg>
    </>
  );
};
export default Header;
