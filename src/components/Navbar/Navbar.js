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
          <ul className="navbar-ul">
            <Link to="/">Todos los libros</Link>
            <p className="navp">|</p>
            <Link to="category/Legendarium">Legendarium</Link>
            <p className="navp">|</p>
            <Link to="category/Wizarding World">Wizarding World</Link>
            <p className="navp">|</p>
            <Link to="category/Song of ice and fire">Song of ice and fire</Link>
            <p className="navp">|</p>
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
