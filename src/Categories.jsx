import React from 'react'
import category from './course-1.jpg'
import { FaStar } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { IoIosTime } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import category2 from './course-2.jpg'
import category3 from './course-3.jpg'
import Categoriespropse from './Categoriespropse';

export default function Categorie() {
  return (
    <div className='container'>
        <div className='coursedata'>
            <div className='coursehr'><span><hr /></span><hr /></div>
            <div className='coursetittle'>COURSES</div>
            <div className='coursehr'><span><hr /></span><hr /></div>
        </div>
            <h1 style={{textAlign:"center"}}>Courses Categories</h1>
        <div className='category'>
            <Categoriespropse
                img={category}
                icons={<FaStar/>}
                icons1={<FcBusinessman/>}
                icons2={<IoIosTime/>}
                icons3={<FaUser/>}
            />
            <Categoriespropse
                img={category2}
                icons={<FaStar/>}
                icons1={<FcBusinessman/>}
                icons2={<IoIosTime/>}
                icons3={<FaUser/>}
            />
            <Categoriespropse
                img={category3}
                icons={<FaStar/>}
                icons1={<FcBusinessman/>}
                icons2={<IoIosTime/>}
                icons3={<FaUser/>}
            />
            {/* <div className='category1'>
                <img src={category} alt="" />
                <div className='categorydata'>
                    <h1>$149.00</h1>
                    <div className='categoryicon'><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span> (123)</div>
                    <h5>Web Design & Development Course for Beginners</h5>
                    <div className='categortbottom'>
                        <div className='bt'>
                            <span><FcBusinessman/></span> John Doe
                        </div>
                        <div className='bt bt1'>
                            <span><IoIosTime/></span> 1.49 Hrs
                        </div>
                        <div className='bt bt1'>
                            <span><FaUser/> </span>30 Students
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='category1'>
                <img src={category2} alt="" />
                <div className='categorydata'>
                    <h1>$149.00</h1>
                    <div className='categoryicon'><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span> (123)</div>
                    <h5>Web Design & Development Course for Beginners</h5>
                    <div className='categortbottom'>
                        <div className='bt'>
                            <span><FcBusinessman/></span> John Doe
                        </div>
                        <div className='bt bt1'>
                            <span><IoIosTime/></span> 1.49 Hrs
                        </div>
                        <div className='bt bt1'>
                            <span><FaUser/> </span>30 Students
                        </div>
                    </div>
                </div>
            </div>
            <div className='category1'>
                <img src={category3} alt="" />
                <div className='categorydata'>
                    <h1>$149.00</h1>
                    <div className='categoryicon'><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span> (123)</div>
                    <h5>Web Design & Development Course for Beginners</h5>
                    <div className='categortbottom'>
                        <div className='bt'>
                            <span><FcBusinessman/></span> John Doe
                        </div>
                        <div className='bt bt1'>
                            <span><IoIosTime/></span> 1.49 Hrs
                        </div>
                        <div className='bt bt1'>
                            <span><FaUser/> </span>30 Students
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}
