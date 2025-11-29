import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
      <div className="container-fluid w-100">
        <a className="navbar-brand text-secondary" href="#">
          <img
            src="/public/image/logo-nav.png" 
            alt="SportCenter Logo"
            width="120"
            height="40"
            className="me-2"
          />
          SportClub Beneficios
        </a> 
      </div>
    </nav>
  );
}

export default Header;
