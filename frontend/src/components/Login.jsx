import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Logging in...");
    };

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="email" className="text-lg">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-lg">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Login
                </button>
            </form>
            <p className="mt-4">
                Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
            </p>
        </div>
    );
};

export default Login;
