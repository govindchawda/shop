import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import img1 from '../course-1.jpg'
import img2 from '../course-2.jpg'
import img3 from '../course-3.jpg'

export default function Footer() {
  return (
        <footer>
            <div className='container'>
                <div className='fotermainbox'>
                    <div className='footerbox'>
                        <h2>Quick Link</h2>
                        <ul>
                            <li><a href=""><MdKeyboardArrowRight/> &nbsp; Home</a></li>
                            <li><a href=""><MdKeyboardArrowRight/> &nbsp;About</a></li>
                            <li><a href=""><MdKeyboardArrowRight/> &nbsp;Services</a></li>
                            <li><a href=""><MdKeyboardArrowRight/> &nbsp;Contact</a></li>
                        </ul>
                    </div>
                    <div className='footerbox'>
                        <h2>Contact</h2>
                        <ul><li><a href=""><FaLocationDot/> &nbsp; 123 Street, New York, USA</a></li>
                        <li><a href=""><IoCallSharp/> &nbsp; +012 345 67890</a></li>
                        <li><a href=""><GrMail/> &nbsp;mail@domain.com</a></li>
                        <li className='ftricons'><a href=""><span><FaTwitter/></span><span><FaFacebookF/></span><span><FaYoutube/></span><span><FaLinkedinIn/></span></a></li>
                        </ul>
                    </div>
                    <div className='footerbox'>
                        <h2>Gallery</h2>
                        <div className='footerimg'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className='footerbox'>
                        <h2>Newsletter</h2>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <input type="email" placeholder='enter email' />
                    </div>
                </div>
                <hr />
                <div className='footerbottom'>
                <b>© <a href="">Your Site Name</a>, All Rights Reserved. Designed By <a href="">HTML Codex</a></b>
                <div>
                    <span style={{border:"none"}}>Home </span><span> Cookies </span><span>Help</span><span>FAQs</span>
                </div>
                </div>
            </div>
        </footer>
  )
}
