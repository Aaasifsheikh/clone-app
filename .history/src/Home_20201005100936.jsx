import React from "react";
import Image from './Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg';

function Home() {
  return (
    <div className="home">
      <img src={Image} alt="" className="home_image" />
    </div>
  );
}

export default Home;
