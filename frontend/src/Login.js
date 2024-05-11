import React from 'react';
import '../src/css/index.css';

function Login() {
    return (
        <div className="container">
            <div className="header">
                <div className="buttons">
                    <h1>Login to Charity Haven</h1>
                    <p>Login in today to see new donations.</p>
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
                    <div className="signup">
                        <h2>or</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1"
                            className="form-label" style={{ textAlign: 'left' }}>Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="password" />
                        </div>
                    </div>
                    <button className="login-button">Login</button>
                    <div className="line2"></div>
                    <p3>Don't have an account? <a href="/signin">Sign Up here.</a></p3>
                </div>
            </div>
        </div>
    );
}

export default Login;
