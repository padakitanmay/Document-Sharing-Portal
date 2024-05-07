import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log("Signing up...");
    };

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-xl font-bold mb-4">Sign up</h2>
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
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Sign up
                </button>
            </form>
            <p className="mt-4">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
