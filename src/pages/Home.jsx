import React, { useState } from "react";
import { Link } from "react-router-dom";
import GithubModal from "./GithubModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <main>
      <section
        className="hero-img text-center text-light py-5 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Bonjour, je suis Sinan Tongac</h1>
          <p className="lead mb-4">Développeur web full stack</p>
          <button
            onClick={handleOpenModal}
            className="btn btn-primary btn-lg px-4"
          >
            En savoir plus
          </button>
        </div>
        <GithubModal show={showModal} handleClose={handleCloseModal} />
      </section>

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title border-bottom border-primary pb-2">
                  À propos
                </h5>
                <img
                  src="/images/john-doe-about.jpg"
                  alt="John Doe"
                  className="img-fluid rounded mb-3"
                />
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed mattis erat. Integer pharetra velit sed dolor
                  efficitur, ut sollicitudin massa facilisis.
                </p>
                <p className="card-text">
                  Sed nec lorem vel augue ultrices tincidunt. Donec fermentum
                  tincidunt mi, vitae gravida enim placerat nec.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title border-bottom border-primary pb-2">
                  Mes compétences
                </h5>

                <div className="mb-3">
                  <label className="form-label">HTML5</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">CSS3</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">JavaScript</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning text-dark"
                      style={{ width: "70%" }}
                    >
                      70%
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">PHP</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "60%" }}
                    >
                      60%
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">React</label>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
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
