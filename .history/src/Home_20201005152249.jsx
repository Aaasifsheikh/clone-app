import React from "react";
import Image from "./Image/WhatsApp Image 2020-10-05 at 10.07.50 AM.jpeg";
import Image2 from "./Product_image/Book Image 2020-10-05 at 11.28.14 AM.jpeg";
// import Image3 from "./Image/WhatsApp Image 2020-10-05 at 11.28.14 AM.jpeg";
// import Image4 from "./Image/WhatsApp Image 2020-10-05 at 11.28.14 AM.jpeg";
// import Image5 from "./Image/WhatsApp Image 2020-10-05 at 11.28.14 AM.jpeg";
// import Image6 from "./Image/WhatsApp Image 2020-10-05 at 11.28.14 AM.jpeg";
// import Image7 from "./Image/WhatsApp Image 2020-10-05 at 11.28.14 AM.jpeg";
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
          image={Image2}
        />
      </div>
      <div className="home_row2">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image2}
        />
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image2}
        />
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image2}
        />
      </div>
      <div className="home_row3">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image={Image2}
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
