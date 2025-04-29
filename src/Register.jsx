import React, { useState } from "react";
import axios from 'axios';
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!name) errors.name = alert("Name is required");
        if (!email) errors.email = alert("Email is required");
        if (!password) errors.password = alert("Password is required");
        return errors;
    };

    const submit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Save to MySQL database
        const userData = { name, email, password };
        await axios.post('http://localhost:3001/api/user', userData);
        navigate("/Crud", { state: { name } });
    };

    return (
        <>
            <h1 className="reg-heading">REGISTRATION FORM</h1>
            <div className="reg-container">
                <label className="reg-label">UserName:</label>
                <input
                    type="text"
                    placeholder="Enter username"
                    className="reg-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label className="reg-label">Email:</label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    className="reg-name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label className="reg-label">Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="reg-name"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="reg-btn btn-primary btn" onClick={submit}>Submit</button>
            </div>
        </>
    );
}

export default Register;