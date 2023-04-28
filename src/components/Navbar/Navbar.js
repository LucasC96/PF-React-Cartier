import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link, Outlet } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/">
            <h1 className="navbar-logo">Home📚</h1>
          </Link>
          <ul style={{ display: "flex", gap: "30px" }}>
            <Link to="/">Todos los libros</Link>
            <Link to="category/Legendarium">Legendarium</Link>
            <Link to="category/Wizarding World">Wizarding World</Link>
            <Link to="category/Song of ice and fire">Song of ice and fire</Link>
            <Link to="category/Dark Tower">Dark Tower</Link>
          </ul>
          <Link className="seeCarrito" to={"/cart"}>
            🛒
            {cart.length > 0 ? <TotalItems /> : null}
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
