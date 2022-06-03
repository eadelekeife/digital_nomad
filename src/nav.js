import './assets/css/nav.css';

import React, { useEffect, useState } from 'react';

import Logo from './assets/images/logo.png';
import { Link } from 'react-router-dom';
import Search from './assets/images/search.svg';

const Nav = () => {
    const [fixedNav, setFixed] = useState(false);

    const [visibleNav, setVisibleNav] = useState(false);

    const onCloseNav = () => setVisibleNav(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])
    return (
        <div>
            <div className={`${fixedNav ? 'fixed' : ''} desktop`}>
                <div className="first_nav">
                    <div className="navi">
                        <div className="logo_side">
                            <img src={Logo} alt="logo" />
                            <hr />
                            <h4>Tivoli Garden Ikoyi Waterfront</h4>
                        </div>
                        <div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Rooms</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Elements</Link></li>
                                <li><Link to="/">Gallery</Link></li>
                                <li><Link to="/">Gallery</Link></li>
                            </ul>
                        </div>
                        <div>
                            <button className="main_button_color_border">Book now</button>
                            <div className="search">
                                <img src={Search} alt="search" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="navi">
                    <div className="logo_side">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div>
                        <button className="main_button_color_border">Book now</button>
                        <div className="search">
                            <img src={Search} alt="search" className="" />
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Nav;