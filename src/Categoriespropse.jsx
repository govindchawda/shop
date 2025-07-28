import React from 'react'

export default function Categoriespropse(propse) {
  return (
    <div className='category1 animate__animated animate__fadeInUp wow'>
                <img src={propse.img} alt="" />
                <div className='categorydata'>
                    <h1>$149.00</h1>
                    <div className='categoryicon'><span>{propse.icons}</span><span>{propse.icons}</span><span>{propse.icons}</span><span>{propse.icons}</span><span>{propse.icons}</span> (123)</div>
                    <h5>Web Design & Development Course for Beginners</h5>
                    <div className='categortbottom'>
                        <div className='bt'>
                            <span>{propse.icons1}</span> John Doe
                        </div>
                        <div className='bt bt1'>
                            <span>{propse.icons2}</span> 1.49 Hrs
                        </div>
                        <div className='bt bt1'>
                            <span>{propse.icons3}</span>30 Students
                        </div>
                    </div>
                </div>
            </div>
  )
}
