import React from 'react'
import './Footer.css'
import logo from '../assets/image/logo.png'
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="ft_block">
                        <div className="ft_item">
                            <div className="ft_logo">
                                <img src={logo} alt="" className="animate__animated animate__backInLeft" />
                            </div>
                            <div className="ft_paragraph">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste beatae ea cumque,
                                    non voluptate hic
                                    excepturi! .
                                </p>
                            </div>
                        </div>
                        <div className="ft_navbar">
                            <div className="nav_items">
                                <h4>Quick Links</h4>
                                <div className="ft_link">
                                    <a href="">Home</a>
                                    <a href="">About</a>
                                    <a href="">Contact</a>
                                    <a href="">Service</a>
                                </div>
                            </div>

                        </div>
                        <div className="ft_contact">
                            <div className="ft_address">

                                <p><bold>Office:</bold>A-125, NH-8 Mahipalpur Extension, Delhi Cantonment New Delhi, Delhi 110037 India</p>
                            </div>

                            <div className="head_contact animate__animated animate__backInRight">
                                <a className="content_info " href="mailto:anand@gmail.com"> <i className="fa fa-envelope mail"
                                    aria-hidden="true"></i>anand@gmail.com</a>
                                <a className="content_info" href="tel:+91 1234567890"><i className="fa fa-phone t_phone"
                                    aria-hidden="true"></i>+91 1234567890</a>
                            </div>
                            <div className="social_media animate__animated animate__backInRight">

                                <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" className="twitter"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>

                            </div>

                        </div>

                    </div>
</div>
            </footer>
            
        </>
    )
}

export default Footer