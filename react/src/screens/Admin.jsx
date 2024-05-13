import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/index.css';

function Admin() {
    return (
        <div>
            <Helmet>
                <div className="logocharity">
                    <img src="/img/google.png" alt="pagelogo" />
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
                            DONATE
                        </div>
                        <div className="login-section">
                            <div className="sub-section">
                                SIGNUP
                            </div>
                            <div className="sub-section">
                                LOGIN
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-section">
                        <img src="/img/cover1.jpg" alt="" />
                        <div className="content-description">
                            {/* Add content description here */}
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="content-section">
                            <h1>
                                Empowering<br />
                                <span><strong>HUMANITY</strong></span>,<br />
                                one act of kindness
                                at a time<br />
                            </h1>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
