import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import "./NavBar.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    isAuthenticated();
  }, []);

  function isAuthenticated() {
    const token = localStorage.getItem("token");

    if (token) setAuthentication(true);
    else setAuthentication(false);
  }

  return (
    <nav>
      <h1 className="logo">
        <Link style={{ textDecoration: "none" }} to="/">
          CodeBot
        </Link>
      </h1>
      {authentication ? (
        <div className="btn-container">
          <AuthButton isAuthenticated={isAuthenticated} name="Logout" />
        </div>
      ) : (
        <div className="btn-container">
          <AuthButton isAuthenticated={isAuthenticated} name="Login" />
          <AuthButton isAuthenticated={isAuthenticated} name="Register" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
