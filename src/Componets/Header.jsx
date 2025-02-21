import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Join Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;