import React from 'react'
import FormImg from '../images/contact-illustration.svg'

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
                  <input type="submit" value ="Submit" />
              </form>
          </div>
      </div>  
    )
}

export default Form