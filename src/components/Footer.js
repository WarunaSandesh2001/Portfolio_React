import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaStackOverflow, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>258/18, Old galle Road, Weligama</p>
                            <p>Sri Lanka.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+94 71 340 2092
                        </h4>
                    </div>
                    <div className="whatsapp">
                        <h4>
                            <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem" }} />+94 71 340 2092
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />warunasandesh2001@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h3>About me</h3>
                    <p>This is me Waruna Sandesh. Associate Software Engineer of NoCompany. I enjoy with new projects and new technologies.</p>
                    <div className="social">
                    <FaLinkedin className="type" size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaTwitter className="type" size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaGithub className="type" size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaStackOverflow className="type" size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer