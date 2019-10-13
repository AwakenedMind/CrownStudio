import React from 'react'
import FormImg from '../images/contact-us.svg'
import Button from '../components/button'

const Form = () => {
    return (
      <div className = "Form-wrapper">
          <img className ="Contact-svg" alt ="Contact us"src = {FormImg}></img>
          <div className ="Form">
              <h1>Contact Us</h1>
              <form>
                  <label>
                      Name:
                      <input type="text" name="name" />
                  </label>
                  <label>
                      Email:
                      <input type="text" name="Email" />
                  </label>
                  <label>
                      Phone:
                      <input type="tel" name="Phone" />
                  </label>
              <Button text="Work together" />
              </form>
          </div>
      </div>  
    )
}

export default Form