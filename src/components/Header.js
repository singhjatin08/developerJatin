import React from 'react'
import resume from '../assets/img/DeveloperJatinResume.pdf'
import { Link, Outlet } from "react-router-dom";


export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/developerJatin/"><img src={process.env.PUBLIC_URL + '/assets/img/developerJatin.svg'} width="150" alt="Developer Jatin Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills-section">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#education">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="noreferrer" target='_blank' href={resume}>Resume</a>
                                </li>
                                <li className='nav-item nav-call'>
                                    <a href='tel:+91 9205329258' className='nav-link'> 
                                        <i className="fa-solid fa-phone"></i> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}
