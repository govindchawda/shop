import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
              h5:"Best Online Courses",
              h1:"Learning Platform",
        p:"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.",
        a:"Read More",
        a1:"Join Now"
      },
      {
            h5:" Online Courses",
            p:". Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.",
            a:"Read More",
            a1:"Join Now",
            h1:"Learning Platform"
      }]
    )
  return (
    <div className='container' style={{display:"flex"}}>
        <Slider {...settings}>
        <div id="banner">
        <div className='bnr'>
                <div className='banner_data'>
                    {arr.map((items,index)=>{
                       return(
                            <div key={index} className='bnrmedia animate__animated animate__zoomIn wow' style={{width:"100%",top:"0"}}>
                             <h5>{items.h5}</h5>
                             <h1>{items.h1}</h1>
                             <p>{items.p}</p>
                             <h4><a className='readmore' href="">{items.a}</a><a className='joinnow' href="">{items.a1}</a></h4>
                            </div>
                        )})}
                </div>
            </div>
        </div>
        </Slider>
    </div>
  )
}
// JavaScript control statement is used to control the execution of a program based on a specific condition