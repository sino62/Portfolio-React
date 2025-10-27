export default function MentionsLegales() {
  return (
    <main>
      {/* Empêche l’indexation par les moteurs */}
      <meta name="robots" content="noindex" />

      {/* Titre principal */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="fw-semibold mb-2">Mentions légales</h1>
          <div className="divider mx-auto my-3"></div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="container my-5">
        <div className="accordion shadow-sm" id="accordionMentions">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#editeur"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="editeur"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <p className="fw-semibold mb-1">Sinan Tongac</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="bi bi-geo-alt me-2"></i>44 rue Louis Garnier
                  </li>
                  <li>
                    <i className="bi bi-geo me-2"></i>25400 Audincourt, France
                  </li>
                  <li>
                    <i className="bi bi-telephone me-2"></i>07 12 34 56 78
                  </li>
                  <li>
                    <i className="bi bi-envelope me-2"></i>
                    sinan.tongac@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#hebergeur"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="hebergeur"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <h5 className="fw-semibold">alwaysdata</h5>
                <p className="mb-1">
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                </p>
                <p className="mb-0">
                  <i className="bi bi-globe me-2"></i>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#credits"
              >
                Crédits
              </button>
            </h2>
            <div
              id="credits"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <h5 className="fw-semibold">Crédits</h5>
                <p>
                  Ce site a été réalisé par <strong>Sinan Tongac</strong>,
                  étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de Formation
                  </a>
                  .
                </p>

                <p>
                  <em>
                    Les images utilisées sur ce site sont libres de droits
                  </em>{" "}
                  et ont été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
                  .
                </p>

                <p>
                  Le favicon de ce site a été fourni par{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/john-doe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sinan Tongac icons créées par Freepik - Flaticon
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
