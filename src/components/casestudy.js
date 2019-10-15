import React from 'react'
import LeftArrow from '../images/leftarrow-icon.svg'
import RightArrow from '../images/rightarrow-icon.svg'

const Study = () => {
    return (
    <div class="Study-wrapper">
        <h1>Case Studies</h1>
        <div class="Study-info">
        <p class="Company-name">Interattiva</p>
        <p class="Company-review">I have gotten so much valuable customers using CrownStudio. I can't say enough about the design. The service was excellent. Completely surpassed our expectations at Interattiva.</p>
        <p class="Company-ceo">Jon Sith, CEO</p>
        <div className="Numbers">
        <img className ="Leftarrow" alt ="left Arrow"src = {LeftArrow}></img>
        <p className="numbers-text">03/05</p>
        <img className ="RightArrow" alt ="Right Arrow"src = {RightArrow}></img>
            </div>
        </div>
    </div>
    )
}

export default Study