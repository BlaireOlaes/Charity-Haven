import React from 'react';
import { Helmet } from 'react-helmet';
import '../src/css/index.css';

function LandingPage() {
    return (
        <div>
            <Helmet>
                <div className="logocharity">
                    <title>Charity Haven</title>
                </div>
            </Helmet>
            <div className="main-container">
                <div className="topbar">
                    <div className="logo-section">
                        CHARITY HAVEN
                    </div>
                    <div className="topbar-section">
                        <div className="sub-section">
                            <a href="/donate">DONATE</a>
                        </div>
                        <div className="login-section">
                            <div className="sub-section">
                                <a href="/signin">SIGN UP</a>
                            </div>
                            <div className="sub-section">
                                <a href="/login">LOGIN</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-section picture">
                        <img src="/img/cover1.jpg" alt="" />
                        <div className="content-description">
                            {/* Add content description here */}
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="content-section text">
                            <h1>
                                Empowering<br />
                                <span><strong>HUMANITY</strong></span>,<br />
                                one act of kindness
                                at a time<br />
                            </h1>
                            <button><a href="/contact">Contact</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
