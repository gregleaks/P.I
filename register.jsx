import React, { useState } from "react";
import '../App.css';

function Register({}) {
    const [name, setName] = useState('');
    const [email, serEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(name, email, password);
        alert('Registrado com sucesso!');
    };

    return(
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => {  
                    }} required/>     
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" onChange={(e) => {  
                    }} required/>     
                </div>
                <div>
                    <label htmlFor="password">Name</label>
                    <input type="text" name="password" id="password" onChange={(e) => {  
                    }} required/>     
                </div>
             <button type="submit">Register</button>
                
            </form>
        </div>
    )
}

export default Register;