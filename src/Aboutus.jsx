import React from 'react'
import aboutimg from './componants/about.jpg'
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Aboutus() {
  return (
    <div className='container'>
        <div id='about'>
        <div className='aboutimg animate__animated animate__fadeInUp wow'>
            <img src={aboutimg} alt="" />
        </div>
        <div className='aboutdata  animate__animated animate__fadeInUp wow'>
            <div style={{display:"flex", marginTop:"10px"}}>
            <div style={{width:"82px",}}>
                <h6>about us</h6> 
                </div>
                <div className='aboutdatahr'><hr /> <div className='aboutdatahr2'><hr/></div>
            </div>
            </div>
            <h1>Welcome to eLEARNING</h1>
            <p style={{marginBottom:"20px"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className='aboutinner'>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span>Skilled Instructors</div>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span><radha>Online Classes</radha></div>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span><>International Certificate</></div>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span>Skilled Instructors</div>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span><radha>Online Classes</radha></div>
              <div className='aboutinner1'><span><HiArrowSmallRight /> </span><radha>International Certificate</radha></div>
            </div>
        <div className='aboutreadmore'><a href="">Read More</a></div>
        </div>
        </div>
    </div>
  )
}
