import React from 'react'

export default function Instructorpropse(propse) {
  return (
    <div className='INSTRUCTORS1 animate__animated animate__fadeInUp wow'>
                <img src={propse.img} alt="" />
                <div className='INSTRUCTORS1data'>
                <div className='INSTRUCTORS1icon'><span>{propse.icons1}</span><span>{propse.icons2}</span><span>{propse.icons3}</span></div>
                    <h2>{propse.tittle}</h2>
                    <p>{propse.text}</p>
                </div>
            </div>
  )
}
