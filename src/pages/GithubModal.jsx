import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function GithubModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="text-light"
    >
      <Modal.Header closeButton className="bg-dark border-secondary text-light">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Profil GitHub"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-8 mt-3 mt-md-0">
            <h5>
              <a
                href="https://github.com/SinanTongac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none"
              >
                Sinan Tongac
              </a>
            </h5>

            <p className="mb-1">
              <i className="bi bi-geo-alt me-2"></i> Audincourt, France
            </p>
            <p className="mb-3">
              <i className="bi bi-card-text me-2"></i>
              Développeur web full stack passionné par la création d’expériences
              modernes et performantes.
            </p>

            <ul className="list-unstyled">
              <li>
                <i className="bi bi-box me-2"></i> Repositories : 3
              </li>
              <li>
                <i className="bi bi-people me-2"></i> Followers : 12
              </li>
              <li>
                <i className="bi bi-person-check me-2"></i> Following : 5
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-dark border-secondary">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
