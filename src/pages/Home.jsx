import React from "react";
import styles from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
const Tit = styles.h1`
width: 100%; 
text-align: center; 
border-bottom: 1px solid #000; 
line-height: 0.1em;
margin: 10px 0 20px; 
margin-top: 2rem;
`;

const Sp = styles.span`
background:#fff; 
    padding:0 10px; 
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Tit><Sp>Trending products</Sp></Tit>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
