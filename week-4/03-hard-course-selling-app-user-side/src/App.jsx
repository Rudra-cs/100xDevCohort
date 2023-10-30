import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import NavBar from "./components/NavBar";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website
// and see how the html changes based on the route.
// You can also try going to /random and see what happens
// (a route that doesnt exist)
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<CreateCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
