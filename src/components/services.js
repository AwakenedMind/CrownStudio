import React from 'react'
import WebDesign from '../images/Webdesign.svg'
import WebDevelopment from '../images/WebDevelopment.svg'
import SEO from '../images/SEO.svg'
import ServiceIllustration from '../images/service-illustration.svg'
import '../sass/services.scss'

const Services = () => {
  return (
    <section className="services-wrapper">
      <h2 className="services-header">Our Services</h2>
      <div className="services-grid">
        <ul className="services-list">
          <li className="services-list-item">
            <div className="services-wrap">
              <img src={WebDesign} className="services-illustration" alt="crownstudio-web-design-service" />
              <h4 className="services-heading">Web Design </h4>
            </div>
            <p className="services-description">
              Prototyped from scratch using industry standard software. Visually stunning sites that follow rigid UI/UX practices. Design that aligns with Your brand & Identity.
            </p>
          </li>

          <li className="services-list-item">
            <div className="services-wrap">
              <img src={WebDevelopment} className="services-illustration" alt="crownstudio-web-development-service" />
              <h4 className="services-heading">Web Development </h4>
            </div>
            <p className="services-description">
              Developed from scratch to fit your company’s brand.
              Same technology used by Fortune 100 companies.
            </p>
          </li>

          <li className="services-list-item">
            <div className="services-wrap">
              <img src={SEO} className="services-illustration" alt="crownstudio-seo-service" />
              <h4 className="services-heading">SEO</h4>
            </div>
            <p className="services-description">
              PPC Campaigns for high quality leads.
              Optimized SEO that drive organic traffic.
              Competitor Research for SEO Strategy.
            </p>
          </li>
        </ul>
        <img src={ServiceIllustration} />
      </div>
    </section>
  )
}

export default Services
