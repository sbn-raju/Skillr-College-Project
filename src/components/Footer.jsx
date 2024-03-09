import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo .png'
import goggleLogo from '../assets/Goggle.png';
import appleLogo from '../assets/Apple.png';
import { IoLogoStackoverflow } from "react-icons/io5";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import { FaInstagram} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";



const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-first-section">
          <img src={logo} alt="Logo"/>
          <div className="footer-first-section-icon-container">
            <ul>
              <li><IoLogoStackoverflow /></li>
              <li><PiGitlabLogoSimpleFill /></li>
              <li><FaInstagram /></li>
              <li><FaFacebook/></li>
              <li><FaTwitter/></li>
              <li><FiLinkedin/></li>
            </ul>
          </div> 
         <div className="footer-download-container">
         <img src={goggleLogo} alt="Goggle" />
          <img src={appleLogo} alt="Apple" />
         </div>
        </div>
        <div className="footer-second-section">
          <div>
          <h2>Our Links</h2>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Student</li>
            <li>Faculty</li>
          </div>
          <div>
          <h2>Courses</h2>
          <li>Data Science</li>
          <li>Artificial Inteligience</li>
          <li>Machine Learning</li>
          <li>DSA using Java</li>
          <li>Python</li>
          </div>
          <div>
          <h2>Support</h2>
            <li>Help Center</li>
            <li>System Requirements</li>
            <li>Site Feedback</li>
            <li>Documentation</li>
            <li>Forum</li>
          </div>
        </div>
        
        <div className="footer-third-section">
          <h2>Subscribe to our newsletter</h2>
           <form action="#" method="post">
            <input type="text" name="email" id="email" placeholder='Enter your Email' />
            <button type="submit">Submit</button>
           </form>
        </div>
      </div>
    </>
  )
}

export default Footer