import React from 'react'
import SocialIcons from '../components/social'
import Company from '../components/company'

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
                {/* <Company /> */}
            </div>
        </div>
    )
}

export default Footer