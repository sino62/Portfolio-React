export default function Portfolio() {
  return (
    <main>
      <section
        className="text-center text-light py-5"
        style={{
          backgroundImage: "url('./images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="container text-center my-5">
        <h2 className="h3 fw-semibold">Portfolio</h2>
        <div className="d-flex justify-content-center my-2">
          <div
            className="border-bottom border-primary"
            style={{ width: 120 }}
          />
        </div>
        <p className="text-body-secondary">
          Voici quelques-unes de mes réalisations
        </p>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-fresh">
              <img
                src="/images/fresh-food.jpg"
                className="card-img-top"
                alt="Fresh Food"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">Fresh Food</h5>
                <p className="card-text text-body-secondary">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">
                  Site réalisé avec PHP et MySQL
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-restaurant">
              <img
                src="/images/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Restaurant Japonais"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">Restaurant Akira</h5>
                <p className="card-text text-body-secondary">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">
                  Site réalisé avec WordPress
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-espace">
              <img
                src="/images/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Espace bien-être"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">Espace bien-être</h5>
                <p className="card-text text-body-secondary">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">
                  Site réalisé avec LARAVEL
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-seo">
              <img
                src="/images/seo.jpg"
                className="card-img-top"
                alt="SEO site web"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">SEO</h5>
                <p className="card-text text-body-secondary">
                  Amélioration de référencement d'un site e-commerce
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">
                  Utilisations des outils SEO
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-api">
              <img
                src="/images/coder.jpg"
                className="card-img-top"
                alt="Création d'une API"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">Création d'une API</h5>
                <p className="card-text text-body-secondary">
                  Création d'une API RESTFULL publique
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">PHP-SYMFONY</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm card-maquette">
              <img
                src="/images/screens.jpg"
                className="card-img-top"
                alt="Maquette d'un site Web"
              />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">
                  Maquette d'un site Web
                </h5>
                <p className="card-text text-body-secondary">
                  Création du prototype d'un site
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>

              <div className="card-footer bg-white text-center">
                <small className="text-body-secondary">
                  Réalisé avec FIGMA
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
