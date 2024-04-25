"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8081/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    role: 'USER'
                }),
            });
            if (response.ok) {
                router.push("/success");
            }
            else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error("Registration failed", error);
            setErrorMessage("Något gick fel vid registrering.");
        }

    };

    return (
    <div >
        <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-72 bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Registrera dig</h1>
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-post:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Användarnamn:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Lösenord:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrera</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  );
}