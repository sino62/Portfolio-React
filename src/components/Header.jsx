import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand brand-small" to="#">
          SINAN TONGAC
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto menu-thin">
            <NavLink className="nav-link active" aria-current="page" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/services">
              SERVICES
            </NavLink>
            <NavLink className="nav-link" to="/portfolio">
              PORTFOLIO
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
            <NavLink className="nav-link" to="/mentions legales">
              MENTIONS LÉGALES
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
