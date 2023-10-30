import { useNavigate } from "react-router-dom";

const AuthButton = ({ name, isAuthenticated }) => {
  const navigate = useNavigate();

  const stySheet = {
    padding: "0.5rem",
    width: "6rem",
    fontSize: 14,
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: 10,
  };

  const getRoute = (name) => {
    const routeMap = {
      Login: "/login",
      Register: "/register",
      Logout: "/logout",
      default: "/",
    };

    return routeMap[name] || routeMap.default;
  };

  function handleLogin() {
    if (name === "Logout") {
      localStorage.removeItem("token");
      isAuthenticated();
      navigate("/");
    } else {
      navigate(getRoute(name));
    }
  }

  return (
    <div style={{ justifyContent: "center" }}>
      <button style={stySheet} onClick={handleLogin}>
        {name}
      </button>
    </div>
  );
};

export default AuthButton;
