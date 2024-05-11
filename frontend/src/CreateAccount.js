import React from 'react';
import { Helmet } from 'react-helmet';
import '../src/css/index.css';


function CreateAccount() {
    return (
        <div className="container">
            <div className="header">
                <div className="buttons">
                    <h1>Create Account</h1>
                    {/* <p>Login in today to see new donations.</p> */}
                    <div className="line-container">
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="signin">
                </div>
                <div className="email">
                    <h3>Email or Username</h3>
                </div>
                <div className="textbox-container">
                    <input type="text" />
                    <button className="login-button">Create</button>
                </div>
                {/* <div className="line"></div> */}
                <p3>Already have an account? <a href="/login">Login here.</a>.</p3>
            </div>
        </div>
        // </div >
    );
}

export default CreateAccount;
