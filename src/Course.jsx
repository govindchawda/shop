import React, { useState } from 'react'
import cat1 from './cat-1.jpg'
import cat2 from './cat-2.jpg'
import cat3 from './cat-3.jpg'
import cat4 from './cat-4.jpg'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export default function Course() {
    const [countstate, setCountState] = useState(false);
  return (
    <div className='container'>
        <div className='coursedata'>
            <div className='coursehr'><span><hr /></span><hr /></div>
            <div className='coursetittle'>CATEGORIES</div>
            <div className='coursehr'><span><hr /></span><hr /></div>
        </div>
        <h1 style={{textAlign:"center"}}>Popular Courses</h1>
        <ScrollTrigger onEnter={ () => setCountState(true)} onExit={ () => setCountState(false)}>
        <div className='courses'>
            <div className='coures1'>
                <div className='course1top animate__animated wow animate__zoomIn'>
                    <img src={cat1} alt="" />
                    <div className='courseinner'><h5>Web Design</h5><p>
                        { countstate &&

                            <CountUp start={0} end={46} duration={2.95}>
                             
                            </CountUp>
                        }
                           course</p></div>
                </div>
                <div className='counter1bottom animate__animated wow animate__zoomIn'>
                    <div className='counter1bottom1'>
                        <img src={cat2} alt="" />
                        <div className='courseinner'><h5>Graphic Design</h5><p>46 course</p></div>
                    </div>
                    <div className='counter1bottom1 animate__animated wow animate__zoomIn'>
                        <img src={cat3} alt="" />
                        <div className='courseinner'><h5>Video Editing</h5><p>46 course</p></div>
                    </div>
                </div>
            </div>
            <div className='course2 animate__animated wow animate__zoomIn'>
                <img src={cat4} alt="" />
                <div className='courseinner' ><h5>Online Markering</h5><p>46 course</p></div>
            </div>
        </div>
        </ScrollTrigger>
    </div>
  )
}
