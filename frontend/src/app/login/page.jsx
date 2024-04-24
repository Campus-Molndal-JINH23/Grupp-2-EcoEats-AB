import React from "react";
import Link from 'next/link';
import LoginForm from "../../components/loginForm/LoginForm.jsx";

export default function Login() {
  return (
    <main>
        <div id="container">
        <LoginForm />
        </div>
    </main>

  );
}