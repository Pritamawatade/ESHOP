import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Image2 from "./assets/images/thi.png"
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Category from './componets/Category/Category'
import Category2 from './componets/Category/Category2'
import Service from './componets/Services/Service'
import headphone from "./assets/images/headphone-M8ndZJ0u.png"
import Banner from './componets/Banner/Banner'
import Heading from './componets/Heading'
import Products from './componets/Products/Products'
import BlogCard from './componets/Blogs/BlogCard'
import LogoStrip from './componets/Partners/LogoStrip'
import Footer from './componets/Footer/Footer'
import { GiDuration } from 'react-icons/gi';
function App() {

  const data = {
    discount: "50% off",
    title: "Fine Smile",
    date: "10 jan to 28 jan",
    Image: headphone,
    title2: "Air Soloe Bass",
    title3: "Winter Sale",
    title4: "Winter is coming",
    bgColor: "#f42c37"


  };

  const data2 = {
    discount: "50% off",
    title: "Fine Smile",
    date: "10 jan to 28 jan",
    Image: Image2,
    title2: "Air Soloe Bass",
    title3: "Winter Sale",
    title4: "Winter is coming",
    bgColor: "#2dcc6f"


  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-300">

      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={data} />
      <Heading text="Our Product" />
      <Products />
      <Banner data={data2} />
      <BlogCard />
      <LogoStrip />
      <Footer />
    </div>
  )
}

export default App
