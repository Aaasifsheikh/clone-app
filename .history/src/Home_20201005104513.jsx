import React from "react";
import Image from './Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg';

function Home() {
  return (
    <div className="home">
      <img src={Image} alt="" className="home_image" />
      {/* Product id, title, price, rating, image */}
      <Product id="12321341" title="The Learn Startup: How Constant Innovation Creates"
               price={11.96}
               rating={5} 
               />
      {/* Product */}
    </div>
  );
}

export default Home;