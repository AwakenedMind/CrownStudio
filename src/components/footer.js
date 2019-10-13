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
                <p class="Privacy">Privacy Policy & Terms of Use</p>
                <SocialIcons/>
            </div>
        </div>
    )
}

export default Footer