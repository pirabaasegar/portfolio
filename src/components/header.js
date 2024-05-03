import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header className="header" id="header">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand">
                    PiRaBaa
                </Link>
                <nav id="navbar" className="navbar order-last p-0" style={{ float: "right" }}>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                <nav id="mobile-nav" className="mobile-nav">
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
