import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="../logo-tmdb.png"></img>
            </a>
        </div>
        </header>
    );
}