export default function Services() {
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
        <h2 className="h3 fw-semibold">Mon offre de services</h2>
        <div className="d-flex justify-content-center my-2">
          <div
            className="border-bottom border-primary"
            style={{ width: 120 }}
          />
        </div>
        <p className="text-body-secondary">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-feather display-6 text-primary"></i>
                </div>
                <h5 className="card-title fw-semibold">UX Design</h5>
                <p className="card-text text-body-secondary">
                  Conception centrée utilisateur pour sites et apps : ateliers,
                  wireframes, prototypes et tests pour des interfaces simples et
                  efficaces.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center2">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-code-slash display-6 text-primary"></i>
                </div>
                <h5 className="card-title fw-semibold">Développement web</h5>
                <p className="card-text text-body-secondary">
                  Sites vitrines et applications avec HTML, CSS, JavaScript,
                  React et Bootstrap. Performances, accessibilité et bonnes
                  pratiques.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center3">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-search display-6 text-primary"></i>
                </div>

                <h5 className="card-title fw-semibold">Référencement (SEO)</h5>
                <p className="card-text text-body-secondary">
                  Optimisations techniques, contenu et performances pour
                  améliorer la visibilité et le trafic organique sur les moteurs
                  de recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
