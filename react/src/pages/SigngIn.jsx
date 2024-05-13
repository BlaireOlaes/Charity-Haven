import React from "react";
import "../css/index.css";
import axios from "../api/axios";

function SignIn() {
    return (
        <div className="signin-wrapper">
            <div className="header">
                <div className="buttons">
                    <h1 className="title">Sign in to Charity Haven</h1>
                    <p>
                        Happening now.
                        <br />
                        Join today.
                    </p>
                    <div className="line-container">
                        <div className="line"></div>
                    </div>

                    <div className="button-container">
                        <button className="social-button">
                            <img src="/img/google.png" alt="Google Logo" />
                            Login with Google
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="social-button">
                            <img src="/img/facebook.png" alt="Facebook Logo" />
                            Login with Facebook
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="social-button">
                            <img src="/img/apple.png" alt="Apple Logo" />
                            Continue with Apple
                        </button>
                    </div>
                </div>

                <div className="main-content">
                    <div className="signin">
                        <hr className="left" />
                        <h2>or</h2>
                        <hr className="right" />
                    </div>
                    <div className="mb-3 email">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                        <button className="login-btn">Sign up</button>
                        <hr />
                    </div>
                    <p>
                        Don't have an account? <a href="/login">Login here.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
