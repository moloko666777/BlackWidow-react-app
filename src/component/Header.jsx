import React from 'react';
import '../style/header.css';

const Header = () => {
    return (
        <header>
            <div className="social-icon">
                <ul>
                    <li><a href="#">fac</a></li>
                    <li><a href="#">fac</a></li>
                    <li><a href="#">fac</a></li>
                    <li><a href="#">fac</a></li>
                    <li><a href="#">fac</a></li>
                </ul>
            </div>
            <div className="logo">
                <p>THE BLACK WIDOW</p>
            </div>
            <div className="menu-links">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MISSION</a></li>
                    <li><a href="#">CHARITY</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">COLLABORATION</a></li>
                    <li><a href="#">YOUR STORY</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">THE AMBASSADOR</a></li>
                    <li><a href="#">NEWS ROOM</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;