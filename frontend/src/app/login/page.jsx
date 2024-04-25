import React from "react";
import Link from 'next/link';
import LoginForm from "../../components/loginForm/LoginForm.jsx";

export default function Login() {
  return (
    <main>

<div >
      <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
        
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-72 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Logga in</h2>
            <input 
            type="text"
            placeholder="Användarnamn"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
            type="password"
            placeholder="Lösenord"
            className="w-full p-2 mb-6 border rounded-md focus:outline-none focus:border-blue-500"
            />
                <Link href="/register" className="text-blue-500 hover:underline text-sm">Registrera dig här</Link>
          </div>
          <button className="w-1/3 mb-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Logga in</button>
        </div>
      </div>
    </div>
    </main>

  );
}