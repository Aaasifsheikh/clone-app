import Header from "./Header";
import React from "react";
import Image from "../Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg";
import tablet from "../Product_image/tablet.jpeg";
import ImageLap from "../Product_image/Laptop Image 2020-10-05 at 3.06.03 PM.jpeg";
import ImageMobile from "../Product_image/Mobile Image 2020-10-05 at 3.03.19 PM.jpeg";
import ImageTv from "../Product_image/Tv Image 2020-10-05 at 3.08.12 PM.jpeg";
import ImageVib from "../Product_image/VibImage 2020-10-05 at 3.15.48 PM.jpeg";
import ImageWm from "../Product_image/Wm Image 2020-10-05 at 3.12.21 PM.jpeg";
import camera from "../Product_image/camera.jpeg";
import smartwatch from "../Product_image/smartwatch.jpeg";
import watch from "../Product_image/watch.jpeg";
import pendrive from "../Product_image/pendrive.jpeg";

import Product from "./Product";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <img src={Image} alt="" className="home_image" />
        {/* Product id, title, price, rating, image */}
        <div className="HomeAll">
          <div className="home_row1">
            <Product
              id="1232134"
              title="Samsung galexy Tab A10.1"
              price={16550}
              rating={5}
              image={tablet}
            />
            <Product
              id="12321333"
              title="IBF 6kg star Fully Automatic Front Loading Washing Machine"
              price={23000}
              rating={4}
              image={ImageWm}
            />
            <Product
              id="12321333"
              title="Panasonic LUMIX G7 4K Digital Camera"
              price={25000}
              rating={4}
              image={camera}
            />
          </div>
          <div className="home_row2">
            <Product
              id="12321341"
              title=""sandisk Cruzer
              price={1800}
              rating={4}
              image={pendrive}
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
            <Product
              id="12321341"
              title="Mi Smart Band 5-1.1 AMOLED Color Display"
              price={24900}
              rating={3}
              image={smartwatch}
            />
            <Product
              id="12321341"
              title="Honor Watch Magic, Lightweight Smart Watch"
              price={3490}
              rating={4}
              image={watch}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
