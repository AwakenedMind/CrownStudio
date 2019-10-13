import React from 'react'
import SocialIcons from '../components/social'

const Footer = () => {
    return (
        <div class="Footer-wrapper">
            <div class="Footer-text">
                <ul class="Footer-nav">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Work</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
                <SocialIcons/>
                <p class="Privacy">Privacy Policy & Terms of Use</p>
            </div>
        </div>
    )
}

export default Footer