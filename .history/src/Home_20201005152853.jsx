import React from "react";
import Image from "./Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg";
import ImageBook from "./Product_image/Book Image 2020-10-05 at 11.28.14 AM.jpeg";
import ImageLap from "./Product_image/Laptop Image 2020-10-05 at 3.06.03 PM.jpeg";
import Image from "./Product_image/Mobile Image 2020-10-05 at 3.03.19 PM.jpeg";
import Image5 from "./Product_image/Tv Image 2020-10-05 at 3.08.12 PM.jpeg";
import Image6 from "./Product_image/VibImage 2020-10-05 at 3.15.48 PM.jpeg";
import Image7 from "./Product_image/Wm Image 2020-10-05 at 3.12.21 PM.jpeg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img src={Image} alt="" className="home_image" />
      {/* Product id, title, price, rating, image */}
      <div className="home_row1">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image2}
        />
        <Product
          id="12321333"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image7}
        />
      </div>
      <div className="home_row2">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image4}
        />
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image3}
        />
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image6}
        />
      </div>
      <div className="home_row3">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image5}
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
