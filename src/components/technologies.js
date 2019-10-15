import React from 'react'
import "../sass/technology.scss"
import Companies from '../images/Companies.svg'

const Technologies = () => {
  return (
    <div className="technology-wrapper">
      <h3 className="technology-header">We Use The Same Technologies</h3>
      <div className="technology-rect">
        <img src={Companies} alt="crownstudio-same-tech" className="technology-companies" />
      </div>
    </div>
  )
}

export default Technologies
