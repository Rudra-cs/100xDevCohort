import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isRegistered = async () => {
    const credentials = {
      username: email,
      password: password,
    };

    try {
      const response = axios.post(
        "http://localhost:3000/admin/signup",
        credentials
      );

      const { token } = (await response).data;

      if (token) {
        console.log("token: ", token);
        localStorage.setItem("token", token);
        navigate("/courses");
      } else {
        console.error("Authentication failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Register to the website</h1>
      <br />
      Email/username-{" "}
      <input type={"text"} onChange={(e) => setEmail(e.target.value)} />
      <br />
      Password -{" "}
      <input type={"password"} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button
        type="submit"
        onClick={() => {
          isRegistered();
        }}
      >
        Register
      </button>
      Already a user? <a href="/login">Login</a>
    </div>
  );
}

export default Register;
