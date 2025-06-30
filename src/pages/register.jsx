import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(name, email, role, password, confirmPassword);
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Here you would typically send the data to your backend server

        try {
            const respone = fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Username: email,
                    Designation: role,
                    password: password,
                })
            })

            if (respone.ok) {
                alert("Registration successful!");
                // Redirect to login or home page
            }
            else {
                alert("Registration failed. Please try again.");
                return;
            }
            const data = respone.json();
            console.log("Register data = ", data);
            localStorage.setItem("token", JSON.stringify(data.token));
            navigate("/");

        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again later.");
        }

    }

    return (
        <div>
            <h1>Register Page</h1>
            <div>
                {/* <div>
                    <span>Name: </span>
                    <input type="text" value={name} required onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div> */}
                <div>
                    <span>Email: </span>
                    <input type="email" required value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <span>Password: </span>
                    <input type="password" value={password} required onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <span>Confirm Password: </span>
                    <input type="password" value={confirmPassword} required onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <select name="role" id="role" required onChange={(e) => {
                        setRole(e.target.value);
                    }}>
                        <option value="Farmer">Farmer</option>
                        <option value="NGO">NGO</option>
                    </select>
                </div>
                
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}