import React from "react";
import "./header.styles.scss";

const Header = ({ handleLogout }) => {
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <h2>KEEPZZ</h2>{" "}
      </div>
      <div className="logout">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
