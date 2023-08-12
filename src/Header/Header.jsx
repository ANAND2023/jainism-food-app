import React from 'react'
import './header.css'
function Header() {
  return (
    <>
    <header>
        <div className="top_nav">
            <div className="container">
                <div className="head_blocks">
                    <div className="head_contact">
                        <a className="content_info " href="mailto:anand@gmail.com"> <i className="fa fa-envelope mail"
                                aria-hidden="true"></i>anand@gmail.com</a>
                        <a className="content_info" href="tel:+91 1234567890"><i className="fa fa-phone t_phone"
                                aria-hidden="true"></i>+91 1234567890</a>
                    </div>
                    <div className="social_media">
                        <ul>
                            <li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" className="twitter"> <i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="bottom_nav">
            <div className="container">
                <div className="nav_block">
                    <div className="logo">
                        <img src="./assets/images/logo.png" alt="">
                    </div>
                    <div className="text_content">
                        <ul className="nav_item">
                            <li className="nav_links"><a href="">Home</a></li>
                            <li className="nav_links"><a href="">About</a></li>
                            <li className="nav_links"><a href="">Contact</a></li>
                            <li className="nav_links"><a href="">Service</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
    </header>
    </>
  )
}

export default Header