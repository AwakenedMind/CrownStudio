import React from 'react'
import TwitterLogo from '../images/twitter-logo.svg'
import FbLogo from '../images/facebook-logo.svg'
import InstaLogo from '../images/instagram-logo.svg'
import LinkedinLogo from '../images/linkedin-logo.svg'
import MediumLogo from '../images/medium-logo.svg'

const SocialIcons = () => {
    return (
        <div class="Footer-links">
            <ul>
            <li><img className ="social" src = {TwitterLogo}></img>Twitter</li>
            <li><img className ="social" src = {FbLogo}></img>Facebook</li>
            <li><img  className = "social" src = {InstaLogo}></img>Instagram</li>
            <li><img className = "social" src ={LinkedinLogo}></img>LinkedIn</li>
            <li><img className = "social" src ={MediumLogo}></img>Medium</li>
            </ul>
        </div>
    )
}

export default SocialIcons