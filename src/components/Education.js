import React from 'react'
import lines from '../assets/img/lines.png'
import soe from '../assets/img/excellence.png';
import ignou from '../assets/img/ignou.png'
import HexaCode from '../assets/img/hexacode.png'


export default function Education() {
    return (
        <section className="education experience" id='education'>
            <img src={lines} alt="lines" className="lines" />
            <h2 className="section-heading-orange mb-5">Education</h2>
            <div className="container education-container experience-container">
                <div className="experience-box">
                    <div className="experience-box-inner">
                        <h2>WEB DEVELOPMENT COURSE</h2>
                        <div className="d-flex justify-content-between">
                            <span>HexaCode Institue </span>{" "}
                            <span>June 2021</span>
                        </div>
                        <ul>
                            <li>Full Stack Developer</li>
                        </ul>
                        <div className="company-logo">
                            <img
                                src={HexaCode}
                                alt="company logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="experience-box">
                    <div className="experience-box-inner">
                        <h2>Bechlor of Science(BSC)</h2>
                        <div className="d-flex justify-content-between">
                            <span>IGNOU University</span>
                            <span>June 2024</span>
                        </div>
                        <ul>
                            <li>Physice, Chemistry, Maths</li>
                        </ul>
                        <div className="company-logo">
                            <img src={ignou} alt="company logo" />
                        </div>
                    </div>
                </div>
                <div className="experience-box">
                    <div className="experience-box-inner">
                        <h2>Senior Secondary</h2>
                        <div className="d-flex justify-content-between">
                            <span>
                                School of Excellence, Khichripur{" "}
                            </span>{" "}
                            <span>July 2020</span>
                        </div>
                        <ul>
                            <li>PCM (Computer Science)</li>
                        </ul>
                        <div className="company-logo">
                            <img src={soe} alt="company logo" />
                        </div>
                    </div>
                </div>

                <div className="piller"></div>
            </div>
        </section>
    )
}
