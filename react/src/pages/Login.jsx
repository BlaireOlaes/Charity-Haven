import React, { useState } from "react";
import "../css/index.css";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!email || !password) {
            toast.warning("Please fill in both fields.");
            return;
        }

        try {
            const response = await axios.post(
                "/api/login",
                {
                    email,
                    password,
                },
                { withCredentials: false }
            );
            console.log(response.data);
            navigate("/home");
        } catch (error) {
            console.error(error);
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    };
    return (
        <div className="container">
            <ToastContainer />
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
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                            style={{ textAlign: "left" }}
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 row">
                        <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                        >
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
                    <div className="line2"></div>
                    <p className="myCustomClass">
                        Don't have an account?{" "}
                        <a href="/signin">Sign Up here.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
