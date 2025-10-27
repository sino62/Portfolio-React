export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="contact-hero text-center py-5 bg-light">
        <div className="container">
          <h1 className="h2 fw-semibold mb-2">Contact</h1>
          <p className="text-body-secondary mb-0">
            Pour me contacter en vue d’un entretien ou d’une future
            collaboration, merci de remplir le formulaire.
          </p>
          <div className="contact-divider mx-auto my-3"></div>
        </div>
      </section>

      {/* FORMULAIRE + COORDONNÉES */}
      <section className="container my-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row g-4">
              {/* Formulaire */}
              <div className="col-12 col-lg-6">
                <h5 className="fw-semibold contact-section-title">
                  Formulaire de contact
                </h5>

                <form className="mt-3">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Votre adresse email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="email@exemple.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Votre numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Sujet"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Votre message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="6"
                      placeholder="Votre message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary contact-btn">
                    Envoyer
                  </button>
                </form>
              </div>

              {/* Coordonnées + carte */}
              <div className="col-12 col-lg-6">
                <h5 className="fw-semibold contact-section-title">
                  Mes coordonnées
                </h5>

                <div className="mt-3">
                  <p className="mb-1 fw-semibold">Sinan Tongac</p>
                  <ul className="list-unstyled text-body-secondary mb-3">
                    <li className="mb-1">
                      <i className="bi bi-geo-alt me-2"></i>44 rue Louis Garnier
                    </li>
                    <li className="mb-1">
                      <i className="bi bi-geo me-2"></i>25400 Audincourt, France
                    </li>
                    <li className="mb-1">
                      <i className="bi bi-telephone me-2"></i>07 62 74 70 00
                    </li>
                    <li className="mb-1">
                      <i className="bi bi-envelope me-2"></i>
                      <a
                        href="mailto:sinan.tongac@outlook.fr"
                        className="text-decoration-none"
                      >
                        sinan.tongac@outlook.fr
                      </a>
                    </li>
                  </ul>

                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <iframe
                      title="Carte"
                      src="https://www.google.com/maps?q=44%20Rue%20Louis%20Garnier%20Audincourt&output=embed"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
