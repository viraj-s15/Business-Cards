import React from "react"
import logo from "./images/profile-picture.png"
import email from "./images/email.png"
import linkedin from "./images/linkedin.png"
import twitter from "./images/Twitter-Icon.png"
import facebook from "./images/Facebook-Icon.png"
import instagram from "./images/Instagram-Icon.png"
import github from "./images/GitHub-Icon.png"
import "./style.css"

export default function DarkMode() {
  return (
    <div className="screen">
      <div className="container">
        <img src={logo} alt="logo" />
        <h3>Laura Smith</h3>
        <h4>Frontend Developer</h4>
        <h5>laurasmith.website</h5>
        <div className="buttons">
          <button>
            <img src={email} alt="email" />
            Email
          </button>
          <button className="btn-blue">
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </button>
        </div>
        <div className="content">
          <div className="about-section">
            <h4>About</h4>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interests-section">
            <h4>Interests</h4>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>

        <div className="footer">
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={github} />
          </a>
        </div>
      </div>

      <div className="container2">
        <img src={logo} alt="logo" />
        <h3>Laura Smith</h3>
        <h4>Frontend Developer</h4>
        <h5>laurasmith.website</h5>
        <div className="buttons2">
          <button>
            <img src={email} alt="email" />
            Email
          </button>
          <button className="btn-blue2">
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </button>
        </div>
        <div className="content2">
          <div className="about-section2">
            <h4>About</h4>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interests-section2">
            <h4>Interests</h4>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>

        <div className="footer2">
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={github} />
          </a>
        </div>
      </div>
    </div>
  )
}
