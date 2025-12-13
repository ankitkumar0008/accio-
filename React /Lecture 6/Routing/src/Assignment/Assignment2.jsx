import { Link, NavLink } from "react-router-dom";
function Assignment2() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}
export default Assignment2;
