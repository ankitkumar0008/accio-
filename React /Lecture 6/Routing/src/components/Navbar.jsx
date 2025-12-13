import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      {/* <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link> */}

      <NavLink
        to="/Home"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >Home</NavLink>
      <NavLink
        to="/About"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >About</NavLink>
      <NavLink
        to="/Contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >Contact</NavLink>
    </nav>
  );
}
export default Navbar;
