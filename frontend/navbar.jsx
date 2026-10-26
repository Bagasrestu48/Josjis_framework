import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        TAPAKE<sup>®</sup>
      </div>

      <nav className="navbar-menu">
        <Link to="/">Beranda</Link>
        <Link to="/katalog">Katalog</Link>
        <Link to="/tentang-kami">Tentang Kami</Link>
        <Link to="/kontak">Kontak</Link>
      </nav>
    </header>
  );
}

export default Navbar;