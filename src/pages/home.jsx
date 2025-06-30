import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigator = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <p>This is a simple React application.</p>
            <p>Feel free to explore the features.</p>
            <button onClick={
                () => {
                    navigator("/register");
                }
            }>Register</button>
            <button onClick={
                () => {
                    navigator("/login");
                }
            }>Login</button>
        </div>
    );
}