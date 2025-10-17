import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4">
          <div className="col">
            <h5 className="mb-3">Sinan Tongac</h5>
            <ul className="list-unstyled small mb-3">
              <li>44 rue Louis Garnier</li>
              <li>25400 Audincourt, France</li>
              <li>07 62 74 70 00</li>
              <li>
                <a
                  href="mailto:sinan.tongac@outlook.fr"
                  className="text-light text-decoration-none"
                >
                  sinan.tongac@outlook.fr
                </a>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-secondary" to="#">
                  Accueil
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-secondary" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-secondary" to="#">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-secondary" to="#">
                  Me contacter
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-secondary" to="#">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  Fresh Food
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  Restaurant Akira
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  Espace bien-être
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  SEO
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  Création d’une API
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-secondary" href="#">
                  Maquette d’un site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pb-3">
          <div className="mt-3 mt-sm-0">
            <a href="#" className="text-secondary fs-5 me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-secondary fs-5">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
