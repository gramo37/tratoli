import React from 'react'
import "../css/shimmer.css"

const Shimmer = ({ id }) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>{id}</h1>
      <div className='shimmer'>
        <div className='shimmer-left'>
          <div className='shimmer-box'>

          </div>
          <div className='shimmer-box'></div>
          <div className='shimmer-box'></div>
        </div>
        <div className='shimmer-right'>

          <div className='shimmer-animation'></div>
        </div>
      </div>
    </>
  )
}

export default Shimmer