import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/Logo.svg'

const Header = () => {

    const location = useLocation();
    const [pathname, setPathName] = useState(location.pathname === ' ' ? "/" : location.pathname.split("/")[1]);

    const [renderer, setrenderer] = useState(0)

    const linksArray = [
        {
            lable: 'Home',
            path: '/',
        },
        {
            lable: 'Work',
            path: '/Work',
        },
        {
            lable: 'Services',
            path: '/Services',
        },
        {
            lable: 'About',
            path: '/About',
        },
        {
            lable: 'Contact',
            path: '/Contact',
        }
    ]

    let activeClass = ''

    const hideNav = () => {
        document.getElementById('burger').click();
        setrenderer(renderer + 1)
    }
    const renderedLinks = linksArray.map((link, index) => {
        let labelText = link.lable;

        if (pathname === link.path && index !== linksArray.length - 1) {
            activeClass = 'active';
            labelText = labelText.replace(labelText, `{ ${labelText} }`)
        }
        else {
            activeClass = ''
        }

        return <li key={index} className={activeClass} onClick={hideNav}><NavLink to={link.path}>{labelText}</NavLink></li>
    })

    useEffect(() => {
        setPathName(location.pathname === ' ' ? "/" : `/${location.pathname.split("/")[1]}`)
    }, [location.pathname])

    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header-main">
                        <div className="header-logo">
                            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                        </div>
                        <div className="header-pages">
                            <ul>
                                {renderedLinks}
                            </ul>
                            <div className="mob-hamburger"><button id='burger' type="submit"
                                className="hamburger-btn"><span></span><span></span><span></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header