
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to='/available'>Availables</Link>
      <Link to="/cities">Cities</Link>
    </div>
  );
}

export default Navbar;