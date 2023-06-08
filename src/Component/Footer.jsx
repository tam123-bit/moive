import React from 'react'
import logo from "../asset/logo.png";
const Footer = () => {
  return (
    <footer>
        <div>
            <h1>company</h1>
            <p>home</p>
            <p>about us</p>
            <p>contact us</p>
            <p>movie</p>
        </div>
        <div>
            <h1>top categories</h1>
            <p>action</p>
            <p>romantic</p>
            <p>drama</p>
            <p>histotycal</p>
        </div>
        <div>
            <h1>my account</h1>
            <p>dasboard</p>
            <p>my favorites</p>
            <p>profile</p>
            <p>change password</p>
        </div>
        <div>
            <img src={logo}></img>
            <p>Lorem 196 Andrew Road, Suite 200,</p>
            <p>New York, NY 10007</p>
            <p>Tell: +255 754 661 423</p>
            <p>Email: info@zpunet.com</p>
        </div>
    </footer>
  )
}

export default Footer
