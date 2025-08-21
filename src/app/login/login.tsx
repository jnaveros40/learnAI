
"use client";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Login = () => {
	const handleGoogleLogin = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			// Redirigir o mostrar mensaje de éxito
			window.location.href = "/";
		} catch (error) {
			alert("Error al iniciar sesión con Google");
		}
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
			<h2>Iniciar sesión</h2>
			<button onClick={handleGoogleLogin} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
				Iniciar sesión con Google
			</button>
		</div>
	);
};

export default Login;
