import React from "react";
import "./Home.css";
import "./Product.js";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home_row">
        <Product
          id={1}
          title="Learning React for beginer (somewhat suitable for not beginers)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
          rating={5}
        />
        <Product
          id={2}
          title="React Bullets - Book 1: A quick and effective guide to start learning"
          price={29.99}
          image="https://m.media-amazon.com/images/I/519MM9d5k0L._SY346_.jpg"
          rating={5}
        />
        <Product
          id={3}
          title="The Road to React: Your journey to master plain yet pragmatic React.js"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/41AJiI9AyyL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
          rating={2}
        />
      </div>

      <div className="home_row">
        <Product
          id={4}
          title="Learning Firebase for beginer (somewhat suitable for not beginers)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/417kHPMJ+9L._SX348_BO1,204,203,200_.jpg"
          rating={3}
        />
        <Product
          id={5}
          title="Learning React for beginer (somewhat suitable for not beginers)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
          rating={5}
        />
        <Product
          id={6}
          title="Learning React for beginer (somewhat suitable for not beginers)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
          rating={4}
        />

        <Product
          id={7}
          title="Learning React for beginer (somewhat suitable for not beginers)"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id={8}
          title="Learning React for beginer (somewhat suitable for not beginers)"
          price={299.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71ljaqTX5DL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
