import React, { useState } from "react";
import './App.css';

function Home((posts, getAuthorName, onAddPost, onLogot))  {
    const [title, setTitle] = useState('');
    const [description, setDescripition] = useState('');

    const hanfleSubmit = (e) => {
        e.preventDefault();
        onAddPost(title, description);
        setTitle('');
        setDescripition('');
    }
    ]
    return(
        <div className="container">
            <h2>Home</h2>
            <button onClick={onLogout}
            className="logout-button">Logout</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange=((e) =>
                        setTitle(e.target.value)} required/>
                    }</div>

                    <div>
                        <label>Descripton</label>
                        <input type="text" value={description} onChange={(e) => setDescripition(e.target.value/>
                        )}
                    </div>
            </form>
        </div>
    )
}