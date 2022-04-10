import React from 'react';
import './App.css';
import github from './img/github.png';
import m from './img/m.svg';

function Nav() {
    return (
        <div className="Nav">
            <a href="https://www.maxkuechen.com" target="_blank" rel="noopener noreferrer">
                <img src={m} alt="M" />
            </a>
            <p>todo.</p>
            <a href="https://github.com/MAXPIL0T/todo" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
            </a>
        </div>
    );
}

export default Nav;
