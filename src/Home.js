import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Android 10.0 Tablet : MEBERRY 10 Ultra-Fast 4GB/RAM,64GB/ROM Tablets-8000mAh Battery-WiFi Support - Bluetooth Keyboard - Grey"
            price={311.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71g7DbH5lBL._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Razer Kraken X Gaming Headset - 7.1 Surround Sound - Ultra-light - Classic Black"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61QIMDB3YTL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Android Tablet, WINNOVO 10 Inch Tablet, 3GB RAM, 64GB ROM, Octa Core 1.6Ghz Processor, 6000mAh Battery, 13MP Rear Camera-Grey"
            price={398.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71qikMV5yTS._AC_UL320_.jpg"
          />
          <Product
            id="12321341"
            title="PRITOM Tablet 7 inch, Android 9.0 Tablet PC with 2 GB RAM, 32 GB Storage, Quad-Core Processor, Wi-Fi,Bluetooth, Dual Camera, (Black1)"
            price={511.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EzUKGy8qL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445976"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354391"
            title="HP 14 Laptop, AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD Storage, 14-inch Full HD Display, Windows 10 Home, Anti-Glare Screen, Long Battery Life (14-fq1021nr, 2021)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81BnABO7qiS._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Cuddly Mals Plush Hamster Toy by Happix, 5 Inch Stuffed Hamster Animal with Super-Soft Fabric, Animal Birthday Decorations"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41ruFWI5TFS._AC_UL320_.jpg"
          />
          <Product
            id="90829333"
            title="TCL 32-inch Class 3-Series HD LED Smart Android TV - 32S334, 2021 Model"
            price={197.68}
            rating={4}
            image="https://m.media-amazon.com/images/I/71mTUwgs9hL._AC_UL320_.jpg"
          />
          <Product
            id="90829334"
            title="Animal Adventure | Scooby Doo | Collectible Seated Plush, Brown"
            price={10.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81JWfsKB8gL._AC_UL320_.jpg"
          />
          {/* <Product
            id="90829335"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg"
          /> */}
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="TCL 65-inch 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65R635, 2021 Model"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/91CXxVtVkAL._AC_UL320_.jpg"
          />
        </div>  
      </div>
    </div>
  );
}

export default Home;
