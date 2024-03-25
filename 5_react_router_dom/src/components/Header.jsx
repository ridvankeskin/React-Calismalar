import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary text-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3 ">
          <Link to={"/"} id="_dark">Kitap Kurdu</Link>
        </span>

        <nav className="d-flex gap-2">
          <NavLink id="dark" to="/">Anasayfa</NavLink>
          <NavLink id="dark" to="/ürünler">Ürünler</NavLink>
          <NavLink id="dark" to="/ekstra">Ektsra</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
