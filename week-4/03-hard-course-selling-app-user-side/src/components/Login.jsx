import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleCallback = async () => {
    const axiosInstance = axios.create({
      headers: {
        username: email,
        password,
      },
    });

    try {
      const response = await axiosInstance.post(
        "http://localhost:3000/admin/login"
      );
      const data = (await response).data;
      console.log(data.msg + " " + data.token);
      localStorage.setItem("token", data.token);
      navigate("/courses");
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <div>
      <h1>Login to admin dashboard</h1>
      <br />
      Email -{" "}
      <input
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password -{" "}
      <input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          handleCallback();
        }}
      >
        Login
      </button>
      <br />
      New here? <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
