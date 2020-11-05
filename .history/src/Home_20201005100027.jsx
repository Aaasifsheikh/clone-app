import React from "react";
import Logo from "./Logo/";

function Home() {
  return (
    <div className="home">
      <img src={Logo} alt="" className="home_image" />
    </div>
  );
}

export default Home;
