import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

// export const SliderDemo = () => {
//     var settings = {
//             dots: true,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             initialSlide: 0,
//             responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   infinite: true,
//                   dots: true,
//                 },
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2,
//                   initialSlide: 2,
//                 },
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                 },
//               },
//             ],
//           };
//     const [arr, setArr] = useState([
//         {
//             h:"Online Classes",
//             P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
//         },
//         {
//              h:"Online Classes",
//             P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
//         },
//         {
//              h:"Home Projects",
//             P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
//         },
//         {
//              h:"Book Library",
//             P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
//         }
//     ]);
//     return (
//         <div  className='container'>
//             <div className='section'>
//             <Slider {...settings}>
//                 {arr.map((items)=>{
//                     <div className='section1'>
//                     <div className='icons'><TbWorld/></div>
//                         <h5>{items.h}</h5>
//                         <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                     </div>
//                 })}
//                 <Slider/>
//             </div>
//         </div>
//   )
// }







export const SliderDemo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [arr] = useState([
    {
                     h:"Skilled Instructors",
                     P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                    icon:[<FaGraduationCap/>]
                 },
                 {
                      h:"Home Projects",
                     P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                     icon:[<IoIosHome/>]
                 },
                 {
                      h:"Book Library",
                     P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                     icon:[<IoBookSharp/>]
                 },
                 {
                      h:"Online Classes",
                     P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                     icon:[<TbWorld/>]
                 },
                 {
                  h:"Skilled Instructors",
                  P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                 icon:[<FaGraduationCap/>]
              },
              {
                   h:"Home Projects",
                  P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                  icon:[<IoIosHome/>]
              },
              {
                   h:"Book Library",
                  P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                  icon:[<IoBookSharp/>]
              },
              {
                   h:"Online Classes",
                  P:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
                  icon:[<TbWorld/>]
              },
  ]);
  return (
    <div className="container">
      <div className="section">
        <Slider {...settings}>
          {arr.map((items, index) => {
            return (
              <div className="section1" key={index}>
                <div class="icons">
                    {items.icon}
                  </div>
                    <h5>{items.h}</h5>
                    <p>{items.P}</p>
                </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};


