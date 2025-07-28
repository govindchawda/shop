import { IoIosHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import SectionProps from "./SectionProps";

export default function Section() {
    return (
    <>
        <div  className='container'>
            <div className='section'>
                <SectionProps
                    icon={<FaGraduationCap/>}
                    tittle='Skilled Instructors'
                    text='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                />
                 <SectionProps
                    icon={<TbWorld/>}
                    tittle='Online Classes'
                    text='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                /> 
                <SectionProps
                    icon={<IoIosHome/>}
                    tittle='Home Projects'
                    text='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                />
                <SectionProps
                    icon={<IoBookSharp/>}
                    tittle='Book Library'
                    text='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                />
                {/* <div className='section1'>
                <div className='icons'><TbWorld/></div>
                    <h5>Online Classes</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className='section1'>
                <div className='icons'><IoIosHome/></div>
                    <h5>Home Projects</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className='section1'>
                <div className='icons'><IoBookSharp/></div>
                    <h5>Book Library</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div> */}
            </div>
        </div>
    </>
  )
}
