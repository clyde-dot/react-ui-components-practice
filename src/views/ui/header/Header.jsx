import React from "react"
import { Link } from "react-router-dom"

import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                React Components
            </Link>
            <nav className="nav">
                <Link to="/" className="nav-link home-page-link">
                    Home
                </Link>
                <Link to="/category" className="nav-link category-page-link">
                    Category
                </Link>
            </nav>
        </header>
    )
}

export default Header
