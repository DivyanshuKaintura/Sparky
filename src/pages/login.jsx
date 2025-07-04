import React from "react";
import { useState } from "react";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(name, email, role, password);
    }

    return (
        <div>
            <h1>Login Page </h1>
            <div>
                <div>
                    <span>Name: </span>
                    <input type="text" value={name} required onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <span>Password: </span>
                    <input type="password" value={password} required onChange={(e) => {
                        setPassword(e.target.value)
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
                <div>
                    <span>Email: </span>
                    <input type="email" required value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}