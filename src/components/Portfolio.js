import React from 'react'
import ReraFiling from '../assets/img/portfolio/rerafiling.webp'
import TheRapidRecruiters from '../assets/img/portfolio/therapidrecruiters.webp'
import DrRajeevSood from '../assets/img/portfolio/drrajeevsood.webp'
import EngageAi from '../assets/img/portfolio/engageai.webp'
import GrowthItm from '../assets/img/portfolio/growthitm.webp'
import rvHospitality from '../assets/img/portfolio/rvhospitality.webp'
import marwarihorses from "../assets/img/portfolio/marwarihorses.webp"
import gopl from "../assets/img/portfolio/globalOpportunities.webp"
import  shreeMedia from "../assets/img/portfolio/shreeMedia.webp"

export default function Portfolio() {
    return (
        <section className='portfolio' id='portfolio'>
            <div className='container'>
                <h2 className='section-heading-dark'>My Portfolio</h2>
                <div className='row pt-5'>
                <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://marwarihorses.in/' rel="noreferrer" target='_blank'>
                                <img src={marwarihorses} className='w-100' alt="Marwari Horses" />
                                <p>Marwari Horses</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://www.global-opportunities.net/' rel="noreferrer" target='_blank'>
                                <img src={gopl} className='w-100' alt="Global Opportunites" />
                                <p>Global Opportunities</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://shreemedia.co/' rel="noreferrer" target='_blank'>
                                <img src={shreeMedia} className='w-100' alt="Shree Media" />
                                <p>Shree Media</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://rerafiling.com/' rel="noreferrer" target='_blank'>
                                <img src={ReraFiling} className='w-100' alt="Rera Filing" />
                                <p>Rera Filing</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://therapidrecruiters.com/' rel="noreferrer" target='_blank'>
                                <img src={TheRapidRecruiters} className='w-100' alt="The Rapid Recruiters" />
                                <p>The Rapid Recruiters</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://www.drrajeevsood.com/' rel="noreferrer" target='_blank'>
                                <img src={DrRajeevSood} className='w-100' alt="Dr. Rajeev Sood" />
                                <p>Dr. Rajeev Sood</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://www.engageai.digital/' rel="noreferrer" target='_blank'>
                                <img src={EngageAi} className='w-100' alt="Engage Ai" />
                                <p>EngageAi</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://www.rvhospitality.in/' rel="noreferrer" target='_blank'>
                                <img src={rvHospitality} className='w-100' alt="RV Hospitality" />
                                <p>RV Hospitality</p>
                            </a>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col-md-4 col-sm-6 portfolio-card'>
                        <div className='portfolio-card-inner'>
                            <a href='https://growthitm.org/' rel="noreferrer" target='_blank'>
                                <img src={GrowthItm} className='w-100' alt="Growth ITM Institue" />
                                <p>Growth ITM</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
