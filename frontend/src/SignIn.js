import React from 'react';
import '../src/css/index.css';


function SignIn() {
    return (
        <div className="container">
            <div className="header">
                <div className="buttons">
                    <h1>Sign in to Charity Haven</h1>
                    <p>Happening now.<br />Join today.</p>
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
                        <h2>or</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <button className="login-button">Sign up</button>
                    <div className="line2"></div>
                    <p3>Don't have an account? <a href="/login">Login here.</a></p3>

                </div>
            </div >
        </div>

    );
}

export default SignIn;
