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
    console.log("AOS initialized");

    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-300">

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
    </div>
  )
}

export default App









// import React from "react";
// import Spline from "@splinetool/react-spline";

// function Watch() {
//   return (
//     <>
//         <div className="min-w-screen h-screen bg-black relative">
//           {" Blue watch "}
//           {/* <Spline scene="https://prod.spline.design/MQK8Y9UKTZzfRveo/scene.splinecode" /> */}
//           {/* black watch */}
//           {/* <Spline scene="https://prod.spline.design/Pt0CIaQihsnff2UN/scene.splinecode" /> */}
//           {/* Headphones */}
//           <Spline scene="https://prod.spline.design/pJ4WLivBuDruy4FJ/scene.splinecode" />


//           {/* <div className="text-7xl font-bold uppercase text-red-700 absolute top-1/3">
//           #1 Product of the m       onth
//         </div> */}

//         </div>
//       <div className="flex items-center min-h-screen">
//       </div>
//         <div className="text-7xl font-bold uppercase text-red-700">
//           #1 Product of the month
//         </div>
//     </>
//   );
// }

// export default Watch;











