import React from "react";
import Image from "../Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg";
import ImageBook from "../Product_image/Book Image 2020-10-05 at 11.28.14 AM.jpeg";
import ImageLap from "../Product_image/Laptop Image 2020-10-05 at 3.06.03 PM.jpeg";
import ImageMobile from "../Product_image/Mobile Image 2020-10-05 at 3.03.19 PM.jpeg";
import ImageTv from "../Product_image/Tv Image 2020-10-05 at 3.08.12 PM.jpeg";
import ImageVib from "../Product_image/VibImage 2020-10-05 at 3.15.48 PM.jpeg";
import ImageWm from "../Product_image/Wm Image 2020-10-05 at 3.12.21 PM.jpeg";
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
          price={1100}
          rating={5}
          image={ImageBook}
        />
        <Product
          id="12321333"
          title="IBF 6kg star Fully Automatic Front Loading Washing Machine"
          price={23000}
          rating={4}
          image={ImageWm}
        />
      </div>
      <div className="home_row2">
        <Product
          id="12321341"
          title="Jm Womens Personal Mini Handy Full Body Massager Vibrator"
          price={1800}
          rating={5}
          image={ImageVib}
        />
        <Product
          id="12321341"
          title="Samsung Galaxy A50s (Prism crush Black, 4GB RAM, 128GB Storage"
          price={22999}
          rating={5}
          image={ImageMobile}
        />
        <Product
          id="12321341"
          title="HP 15 10th Generation Core if Processor 15.6-inch FHD Laptop"
          price={54990}
          rating={5}
          image={ImageLap}
        />
      </div>
      <div className="home_row3">
        <Product
          id="12321341"
          title="Mi TV 4A PRO 80cm (32 inches) HD Ready Android LED TV (BLACK)| With Data Saver"
          price={13490}
          rating={4}
          image={ImageTv}
        />
      </div>
      
      
    </div>
    
  );
}

export default Home;
