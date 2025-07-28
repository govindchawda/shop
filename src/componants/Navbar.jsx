import React from 'react'
import { FaBook } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div><span className='navIcon'><FaBook/></span><b className='navTittle'>eLEARNING</b></div>
        <ul>
            <li><a style={{color:"#06BBCC"}} href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Servics</a></li>
            <li><a href="">Contact</a></li>
            <li><a className='navJoin' href=""><span><FaArrowRight/></span><span>Join Now</span></a></li>
        </ul>
    </nav>
  )
}
