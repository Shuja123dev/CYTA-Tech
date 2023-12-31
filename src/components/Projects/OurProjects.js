import React from 'react'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import btnArrow from '../../assets/images/btn-arrow.svg'
import Projects from './Projects'
import { NavLink } from 'react-router-dom'

const OurProjects = () => {

    return (
        <>
            <section className="recent-project">
                <div className="recent-project-heading">
                    <h2>RECENT PROJECTS</h2>
                </div>
                <div className="container">
                    <Projects n={4} />
                    <div className="tab-btn rec banner-btn">
                        <NavLink to="/Work">
                            SEE Projects
                            <img className="hov1" src={btnArrow} alt="lazy" />
                            <img className="hov2" src={arrowC2} alt="lazy" />
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProjects