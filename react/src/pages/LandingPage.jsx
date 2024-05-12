import React, { useState } from "react";
// import { Helmet, HelmetProvider } from "react-helmet";
import "../css/index.css";
import axios from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

function LandingPage() {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);

    const [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setProfilePic(
                Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0]),
                })
            );
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(user).forEach((key) => formData.append(key, user[key]));
        if (profilePic) {
            formData.append("profile_pic", profilePic);
        }

        axios
            .post("/api/users", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: false,
            })
            .then((response) => {
                console.log(response.data);
                toast.success("Account Created Successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
                if (
                    error.response &&
                    error.response.data.errors.email[0] ===
                        "The email has already been taken."
                ) {
                    toast.error("Email already in use");
                } else {
                    toast.error("An error occurred");
                }
            });
    };

    return (
        <div>
            <ToastContainer />
            {/* <HelmetProvider>
                <Helmet> */}
            <title>Charity Haven</title>
            {/* </Helmet>
            </HelmetProvider> */}
            <div className="main-container">
                <div className="topbar">
                    <div className="logo-section">CHARITY HAVEN</div>
                    <div className="topbar-section">
                        <div className="sub-section">
                            <a href="/contact">DONATE</a>
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
                {/* <div className="cover-page background-image"> */}
                <div className="cover-page">
                    <div className="content-section"></div>
                    <div className="container">
                        <div className="header">
                            <div className="buttons">
                                <h1>Create Account</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {profilePic ? (
                                            <img
                                                src={profilePic.preview}
                                                alt="Profile Preview"
                                            />
                                        ) : (
                                            <p>
                                                Drag 'n' drop profile picture
                                                here, or click to select a
                                                picture
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="inputUsername"
                                            className="form-label"
                                        >
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputUsername"
                                            placeholder="Username"
                                            name="username"
                                            value={user.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="inputFirstname"
                                            className="form-label"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputFirstname"
                                            placeholder="First Name"
                                            name="firstname"
                                            value={user.firstname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="inputLastname"
                                            className="form-label"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputLastname"
                                            placeholder="Last Name"
                                            name="lastname"
                                            value={user.lastname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
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
                                            placeholder="Email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="inputPassword"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword"
                                            placeholder="Password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="login-button"
                                    >
                                        Submit
                                    </button>
                                </form>
                                {/* <button><a href="/contact">Contact</a></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default LandingPage;
