import Link from "next/link";
import React from "react";

export default function Success() {
  return (
    <div >
        <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4">Registreringen lyckades!</h2>
              <p className="text-gray-700 mb-4">Du har framgångsrikt registrerat dig.</p>
              <p className="text-gray-700 mb-4">Klicka nedan för att logga in:</p>
              <Link href="/login" className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md text-center">
                Logga in
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}