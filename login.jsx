import React, { useState } from "react";
import '../App.css';

function Login({onLogin, onRegistrer}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const sucess = onLogin(email, password);
        if (sucess) {
            alert('Login realizado com sucesso!')
        } else {
            alert('Credenciais inválidas. Tente novamente.')
        }

    };

    return(
        <div clasName="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" value=
                {email} onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div>
                <label htmlFor="password">E-mail</label>
                <input type="text" name="password" id="password" value=
                {password} onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>

            <button onClick={onLogin}>Login</button>
        </form>
        <button onClick={onRegistrer}>Register</button>
    </div>
    )
}