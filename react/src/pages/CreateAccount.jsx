import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
    const initialFormState = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        checked: false,
    };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setUser({ ...user, [name]: checked });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user.email || !user.password || !user.confirmPassword) return;

        fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        setUser(initialFormState);
    };

    return (
        // <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '50px' }}>
        <form
            onSubmit={handleSubmit}
            style={{ paddingLeft: "50px", width: "1700px", height: "100px" }}
        >
            <div className="form-row">
                <div className="form-group col">
                    <label
                        htmlFor="inputFirstname"
                        style={{
                            color: "#00111f",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstname"
                        name="firstname"
                        value={user.firstname}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group col">
                    <label
                        htmlFor="inputLastname"
                        style={{
                            color: "#00111f",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastname"
                        name="lastname"
                        value={user.lastname}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col">
                    <label
                        htmlFor="inputEmail"
                        style={{
                            color: "#00111f",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <div className="form-group col">
                    <label
                        htmlFor="inputUsername"
                        style={{
                            color: "#00111f",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                    />
                </div>
            </div>

            <div className="form-group">
                <label
                    htmlFor="inputPassword"
                    style={{
                        color: "#00111f",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
            </div>

            <div className="form-group">
                <label
                    htmlFor="inputConfirmPassword"
                    style={{
                        color: "#00111f",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                />
            </div>

            <div className="form-group">
                <label
                    htmlFor="inputRole"
                    style={{
                        color: "#00111f",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Role
                </label>
                <select
                    id="inputRole"
                    className="form-control"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                >
                    <option value="">Select Role</option>
                    <option value="admin">Command Center Admin</option>
                    <option value="user">Agency Personnel</option>
                </select>
            </div>

            {/* <div className="form-group">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        name="checked"
                        checked={user.checked}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label> */}
            {/* </div> */}
            {/* </div> */}
            <button type="submit" className="btn btn-primary col-12">
                Submit
            </button>
        </form>
        // </div >
    );
};

export default AddUserForm;
