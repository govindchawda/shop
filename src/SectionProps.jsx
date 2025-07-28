import React from 'react'

export default function SectionProps(props) {
  return (
    
         <div className='section1'>
                    <div className='icons'>{props.icon}</div>
                    <h5>{props.tittle}</h5>
                    <p>{props.text}</p>
                </div>
    
  )
}
