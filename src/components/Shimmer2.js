import React from 'react'
import "../css/shimmer2.css"

const Shimmer2 = () => {
  return (
    <div className='shimmer-2-container'>
      {Array.from(Array(15), (_, index) => index + 1).map((item) => {
        return <div key={item} style={{width: `${Math.floor(Math.random() * 70) + 150}px`}} className='shimmer-2-card'></div>
      })}
      <div className='shimmer-animation'></div>
    </div>
  )
}

export default Shimmer2